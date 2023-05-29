const initialState = {
  danhSachCuoc: [
    { ma: 'nai', hinhAnh: './img/nai.png' },
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
  rem: { demKhacNhau: null, demCap: null, bao: 1, bef1: null }
}

const bauCuaReducer = (state = initialState) => {
  const dice = [...state.danhSachCuoc];
  let randomDice = [], resultDice = [], rem = state.rem;
  const listBao = { 1: 'nai', 2: 'cua', 3: 'ga', 4: 'tom', 5: 'bau', 6: 'ca' }; 

  for (let i = 0; i < 3; i++) {
    randomDice.push(dice[ Math.floor(Math.random() * 6) ]);
  }

  if ((randomDice[0].ma !== randomDice[1].ma) && (randomDice[1].ma !== randomDice[2].ma) && (randomDice[0].ma !== randomDice[2].ma)) {
    if (rem.demKhacNhau === 3 && rem.demCap === 0) {
      rem.demKhacNhau = 0;
      rem.demCap = 0;
      resultDice.push(...Array(3).fill({ ma: listBao[rem.bao], hinhAnh: './img/' + listBao[rem.bao] + '.png' }));
      rem.bao++;
      if (rem.bao === 7) {
        rem.bao = 1;
      } 
    } else {
      rem.demCap = 0;
      rem.demKhacNhau++;
      if (rem.bef1 === 'nai') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
        (randomDice[0].ma !== 'cua' && randomDice[0].ma !== 'cua') ? resultDice.push({ ma: 'cua', hinhAnh: './img/cua.png' }) : resultDice.push({ ma: randomDice[2].ma, hinhAnh: './img/' + randomDice[2].ma + '.png' });
      } else if (rem.bef1 === 'cua') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
        (randomDice[0].ma !== 'ga' && randomDice[0].ma !== 'ga') ? resultDice.push({ ma: 'ga', hinhAnh: './img/ga.png' }) : resultDice.push({ ma: randomDice[2].ma, hinhAnh: './img/' + randomDice[2].ma + '.png' });
      } else if (rem.bef1 === 'ga') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
        (randomDice[0].ma !== 'tom' && randomDice[0].ma !== 'tom') ? resultDice.push({ ma: 'tom', hinhAnh: './img/tom.png' }) : resultDice.push({ ma: randomDice[2].ma, hinhAnh: './img/' + randomDice[2].ma + '.png' });
      } else if (rem.bef1 === 'tom') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
        (randomDice[0].ma !== 'bau' && randomDice[0].ma !== 'bau') ? resultDice.push({ ma: 'bau', hinhAnh: './img/bau.png' }) : resultDice.push({ ma: randomDice[2].ma, hinhAnh: './img/' + randomDice[2].ma + '.png' });
      } else if (rem.bef1 === 'bau') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
        (randomDice[0].ma !== 'ca' && randomDice[0].ma !== 'ca') ? resultDice.push({ ma: 'ca', hinhAnh: './img/ca.png' }) : resultDice.push({ ma: randomDice[2].ma, hinhAnh: './img/' + randomDice[2].ma + '.png' });
      } else if (rem.bef1 === 'ca') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
        (randomDice[0].ma !== 'nai' && randomDice[0].ma !== 'nai') ? resultDice.push({ ma: 'nai', hinhAnh: './img/nai.png' }) : resultDice.push({ ma: randomDice[2].ma, hinhAnh: './img/' + randomDice[2].ma + '.png' });
      } else {
        resultDice = [...randomDice];
      }
    }
    rem.bef1 = resultDice[0].ma;

  } else if ((randomDice[0].ma === randomDice[1].ma && randomDice[0].ma !== randomDice[2].ma) || (randomDice[0].ma === randomDice[2].ma && randomDice[0].ma !== randomDice[1].ma) || (randomDice[1].ma === randomDice[2].ma && randomDice[1].ma !== randomDice[0].ma)) {
    if (rem.demCap === 3 && rem.demKhacNhau === 0) {
      rem.demKhacNhau = 0;
      rem.demCap = 0;
      resultDice.push(...Array(3).fill({ ma: listBao[rem.bao], hinhAnh: './img/' + listBao[rem.bao] + '.png' }));
      rem.bao++;
      if (rem.bao === 7) {
        rem.bao = 1;
      }
    } else {
      rem.demKhacNhau = 0;
      rem.demCap++;
      if (rem.bef1 === 'nai') {
        const ran_1in5 = [1, 2, 3, 4, 6][Math.floor(Math.random() * 5)];
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        if (randomDice[0].ma !== 'cua') {
          resultDice.push(...Array(2).fill({ ma: 'cua', hinhAnh: './img/cua.png' }));
        } else {
          resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
          (randomDice[1].ma !== 'cua') ? resultDice.push({ ma: 'cua', hinhAnh: './img/cua.png' }) : resultDice.push({ ma: randomDice[ran_1in5].ma, hinhAnh: './img/' + randomDice[ran_1in5].ma + '.png' });
        }
      } else if (rem.bef1 === 'cua') {
        const ran_1in5 = [1, 2, 4, 5, 6][Math.floor(Math.random() * 5)];
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        if (randomDice[0].ma !== 'ga') {
          resultDice.push(...Array(2).fill({ ma: 'ga', hinhAnh: './img/ga.png' }));
        } else {
          resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
          (randomDice[1].ma !== 'ga') ? resultDice.push({ ma: 'ga', hinhAnh: './img/ga.png' }) : resultDice.push({ ma: randomDice[ran_1in5].ma, hinhAnh: './img/' + randomDice[ran_1in5].ma + '.png' });
        }
      } else if (rem.bef1 === 'ga') {
        const ran_1in5 = [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)];
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        if (randomDice[0].ma !== 'tom') {
          resultDice.push(...Array(2).fill({ ma: 'tom', hinhAnh: './img/tom.png' }));
        } else {
          resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
          (randomDice[1].ma !== 'tom') ? resultDice.push({ ma: 'tom', hinhAnh: './img/tom.png' }) : resultDice.push({ ma: randomDice[ran_1in5].ma, hinhAnh: './img/' + randomDice[ran_1in5].ma + '.png' });
        }
      } else if (rem.bef1 === 'tom') {
        const ran_1in5 = [1, 3, 4, 5, 6][Math.floor(Math.random() * 5)];
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        if (randomDice[0].ma !== 'bau') {
          resultDice.push(...Array(2).fill({ ma: 'bau', hinhAnh: './img/bau.png' }));
        } else {
          resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
          (randomDice[1].ma !== 'bau') ? resultDice.push({ ma: 'bau', hinhAnh: './img/bau.png' }) : resultDice.push({ ma: randomDice[ran_1in5].ma, hinhAnh: './img/' + randomDice[ran_1in5].ma + '.png' });
        }
      } else if (rem.bef1 === 'bau') {
        const ran_1in5 = [1, 2, 3, 5, 6][Math.floor(Math.random() * 5)];
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        if (randomDice[0].ma !== 'ca') {
          resultDice.push(...Array(2).fill({ ma: 'ca', hinhAnh: './img/ca.png' }));
        } else {
          resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
          (randomDice[1].ma !== 'ca') ? resultDice.push({ ma: 'ca', hinhAnh: './img/ca.png' }) : resultDice.push({ ma: randomDice[ran_1in5].ma, hinhAnh: './img/' + randomDice[ran_1in5].ma + '.png' });
        }
      } else if (rem.bef1 === 'ca') {
        const ran_1in5 = [2, 3, 4, 5, 6][Math.floor(Math.random() * 5)];
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        if (randomDice[0].ma !== 'nai') {
          resultDice.push(...Array(2).fill({ ma: 'nai', hinhAnh: './img/nai.png' }));
        } else {
          resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
          (randomDice[1].ma !== 'nai') ? resultDice.push({ ma: 'nai', hinhAnh: './img/nai.png' }) : resultDice.push({ ma: randomDice[ran_1in5].ma, hinhAnh: './img/' + randomDice[ran_1in5].ma + '.png' });
        }
      } else {
        resultDice = [...randomDice];
      }
    }
    rem.bef1 = resultDice[0].ma;

  } else {
    resultDice.push(...Array(3).fill({ ma: listBao[rem.bao], hinhAnh: './img/' + listBao[rem.bao] + '.png' }));
    rem.bao++;
    if (rem.bao === 7) {
      rem.bao = 1;
    } 
    rem.demKhacNhau = 0;
    rem.demCap = 0;
    rem.bef1 = resultDice[0].ma;
  }
  
  return {
    ...state,
    mangXucXac: resultDice,
    danhSachCuoc: state.danhSachCuoc.map(dice => dice),
    rem: rem
  };
};

export default bauCuaReducer;
