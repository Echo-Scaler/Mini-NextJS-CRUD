import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data/items.json');

export interface Item {
    id: string;
    name: string;
    description: string;
}

export const getItems = (): Item[] => {
    try {
        if (!fs.existsSync(dataFilePath)) {
            return [];
        }
        const jsonData = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(jsonData);
    } catch (error) {
        console.error("Error reading data:", error);
        return [];
    }
};

export const saveItems = (items: Item[]) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(items, null, 2));
    } catch (error) {
        console.error("Error writing data:", error);
    }
};
