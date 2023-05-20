const initialState = {
    danhSachCuoc: [
        { ma: 'nai', hinhAnh: './img/nai.png'},
        { ma: 'bau', hinhAnh: './img/bau.png' },
        { ma: 'ga', hinhAnh: './img/ga.png' },
        { ma: 'ca', hinhAnh: './img/ca.png' },
        { ma: 'cua', hinhAnh: './img/cua.png' },
        { ma: 'tom', hinhAnh: './img/tom.png' }
    ],
    mangXucXac: [
        { ma: 'nai', hinhAnh: './img/nai.png' },
        { ma: 'ca', hinhAnh: './img/ca.png' },
        { ma: 'tom', hinhAnh: './img/tom.png' }
    ]

}

const randomDice = () => {
    const dice = [...initialState.danhSachCuoc];
    const randomDice = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * dice.length);
        randomDice.push(dice[randomIndex]);
    }
    return randomDice;
}

const bauCuaReducer = (state = initialState) => {
    state.mangXucXac = randomDice();
    
    state.danhSachCuoc = state.danhSachCuoc.map(dice => {
        return dice;
    });
    return {...state};
};

export default bauCuaReducer;