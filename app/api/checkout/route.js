import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    console.log("API Route Hit");

    const { items } = await req.json(); // Use req.json() to get JSON payload
    console.log(items);

    const line_items = items.map(item => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: item.title,
            },
            unit_amount: item.price * 100, // Amount in cents
        },
        quantity: item.quantity,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/shop`,
            cancel_url: `${req.headers.get('origin')}/`,
        });

        return NextResponse.json({ sessionURL: session.url });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
    }
}
