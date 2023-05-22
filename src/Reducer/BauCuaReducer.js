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
  ],
  demKhacNhau: null,
  demCap: null
}

const bauCuaReducer = (state = initialState) => {
  const dice = [...state.danhSachCuoc];
  let randomDice = [], resultDice = [];
  let demKhacNhau = state.demKhacNhau;
  let demCap = state.demCap;
  const listXucXac = {1: 'nai', 2: 'bau', 3: 'ga', 4: 'ca', 5: 'cua', 6: 'tom'};
  const randomBao = Math.floor(Math.random() * 6) + 1;

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * dice.length);
    randomDice.push(dice[randomIndex]);
  }
  console.log('--------------------');
  console.log('khac1', demKhacNhau);
  console.log('cap1', demCap);  

  if (randomDice[0].ma !== randomDice[1].ma && randomDice[1].ma !== randomDice[2].ma && randomDice[0].ma !== randomDice[2].ma) {
    if (demKhacNhau === 3 && demCap === 0) {
      demKhacNhau = 0;
      demCap = 0;
      console.log('Bão 3 con khác');
      resultDice.push({ ma: listXucXac[randomBao], hinhAnh: './img/' + listXucXac[randomBao] + '.png' });
      resultDice.push({ ma: listXucXac[randomBao], hinhAnh: './img/' + listXucXac[randomBao] + '.png' });
      resultDice.push({ ma: listXucXac[randomBao], hinhAnh: './img/' + listXucXac[randomBao] + '.png' });
    } else {
      demCap = 0;
      demKhacNhau++;
      resultDice = [...randomDice];
    }
  } else if ((randomDice[0].ma === randomDice[1].ma && randomDice[0].ma !== randomDice[2].ma) || (randomDice[0].ma === randomDice[2].ma && randomDice[0].ma !== randomDice[1].ma) || (randomDice[1].ma === randomDice[2].ma && randomDice[1].ma !== randomDice[0].ma)) {
    if (demCap === 3 && demKhacNhau === 0) {
      demKhacNhau = 0;
      demCap = 0;
      console.log('Bão 2 con giống');
      resultDice.push({ ma: listXucXac[randomBao], hinhAnh: './img/' + listXucXac[randomBao] + '.png' });
      resultDice.push({ ma: listXucXac[randomBao], hinhAnh: './img/' + listXucXac[randomBao] + '.png' });
      resultDice.push({ ma: listXucXac[randomBao], hinhAnh: './img/' + listXucXac[randomBao] + '.png' });
    } else {
      demKhacNhau = 0;
      demCap++;
      resultDice = [...randomDice];
    }
  } else {
    resultDice = [...randomDice];
    demKhacNhau = 0;
    demCap = 0;
  }
  
  return {
    ...state,
    mangXucXac: resultDice,
    danhSachCuoc: state.danhSachCuoc.map(dice => dice),
    demKhacNhau: demKhacNhau,
    demCap: demCap
  };
};

export default bauCuaReducer;
