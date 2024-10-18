// pages/api/submit.ts
import { NextResponse } from 'next/server';
import connectToDatabase from '../../lib/mongodb';
import User from '../../models/User';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    await connectToDatabase();

    const newUser = new User(formData);
    await newUser.save();

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating user', error }, { status: 500 });
  }
}
