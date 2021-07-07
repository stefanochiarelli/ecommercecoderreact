const initialState = {
    items: [{}]
}

const addItem = (itemClicked, quantity, id) => {

    initialState.items.push([{
        id,
        itemClicked,
        quantity
    }])
   

}



const removeItem = () => {}