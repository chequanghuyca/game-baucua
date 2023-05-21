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

const bauCuaReducer = (state = initialState) => {
    const dice = [...state.danhSachCuoc];
    const randomDice = [];
    
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * dice.length);
      randomDice.push(dice[randomIndex]);
    }
    
    return {
      ...state,
      mangXucXac: randomDice,
      danhSachCuoc: state.danhSachCuoc.map(dice => dice)
    };
};


export default bauCuaReducer;