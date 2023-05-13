type Item = {
    id: string;
}

export const findItemIndexById = <TItem extends Item>( items: TItem[], id: string ) => {
    return items.findIndex((item: TItem) => item.id === id);
}

// test to pass in an array of obj without id property
// const itemWithoutId = [{ text: "test" }];
// findItemIndexById(itemWithoutId, "123");