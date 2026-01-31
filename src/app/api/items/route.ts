import { NextResponse } from 'next/server';
import { getItems, saveItems, Item } from '@/lib/data';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    const items = getItems();
    return NextResponse.json(items);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, description } = body;

        if (!name || !description) {
            return NextResponse.json({ error: 'Name and description are required' }, { status: 400 });
        }

        const items = getItems();
        const newItem: Item = {
            id: uuidv4(),
            name,
            description,
        };

        items.push(newItem);
        saveItems(items);

        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
    }
}
