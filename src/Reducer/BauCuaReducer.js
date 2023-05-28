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
  demKhacNhau: null,
  demCap: null,
  bao: 1, 
  remBef: null
}

const bauCuaReducer = (state = initialState) => {
  const dice = [...state.danhSachCuoc];
  let randomDice = [], resultDice = [];
  let { demKhacNhau, demCap, bao, remBef } = state;
  const listXucXac = { 1: 'nai', 2: 'bau', 3: 'ga', 4: 'ca', 5: 'cua', 6: 'tom' };
  const listBao = { 1: 1, 2: 5, 3: 3, 4: 6, 5: 2, 6: 4 }; 

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * dice.length);
    randomDice.push(dice[randomIndex]);
  }

  if ((randomDice[0].ma !== randomDice[1].ma) && (randomDice[1].ma !== randomDice[2].ma) && (randomDice[0].ma !== randomDice[2].ma)) {
    if (demKhacNhau === 3 && demCap === 0) {
      demKhacNhau = 0;
      demCap = 0;
      resultDice.push(...Array(3).fill({ ma: listXucXac[listBao[bao]], hinhAnh: './img/' + listXucXac[listBao[bao]] + '.png' }));
      bao++;
      if (bao === 7) {
        bao = 1;
      } 
    } else {
      demCap = 0;
      demKhacNhau++;
      if (remBef === 'nai') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
        (randomDice[0].ma !== 'cua' || randomDice[0].ma !== 'cua') ? resultDice.push({ ma: 'cua', hinhAnh: './img/cua.png' }) : resultDice.push({ ma: randomDice[2].ma, hinhAnh: './img/' + randomDice[2].ma + '.png' });
      } else if (remBef === 'cua') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
        (randomDice[0].ma !== 'ga' || randomDice[0].ma !== 'ga') ? resultDice.push({ ma: 'ga', hinhAnh: './img/ga.png' }) : resultDice.push({ ma: randomDice[2].ma, hinhAnh: './img/' + randomDice[2].ma + '.png' });
      } else if (remBef === 'ga') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
        (randomDice[0].ma !== 'tom' || randomDice[0].ma !== 'tom') ? resultDice.push({ ma: 'tom', hinhAnh: './img/tom.png' }) : resultDice.push({ ma: randomDice[2].ma, hinhAnh: './img/' + randomDice[2].ma + '.png' });
      } else if (remBef === 'tom') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
        (randomDice[0].ma !== 'bau' || randomDice[0].ma !== 'bau') ? resultDice.push({ ma: 'bau', hinhAnh: './img/bau.png' }) : resultDice.push({ ma: randomDice[2].ma, hinhAnh: './img/' + randomDice[2].ma + '.png' });
      } else if (remBef === 'bau') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
        (randomDice[0].ma !== 'ca' || randomDice[0].ma !== 'ca') ? resultDice.push({ ma: 'ca', hinhAnh: './img/ca.png' }) : resultDice.push({ ma: randomDice[2].ma, hinhAnh: './img/' + randomDice[2].ma + '.png' });
      } else if (remBef === 'ca') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
        (randomDice[0].ma !== 'nai' || randomDice[0].ma !== 'nai') ? resultDice.push({ ma: 'nai', hinhAnh: './img/nai.png' }) : resultDice.push({ ma: randomDice[2].ma, hinhAnh: './img/' + randomDice[2].ma + '.png' });
      } else {
        resultDice = [...randomDice];
      }
    }
    remBef = resultDice[0].ma;

  } else if ((randomDice[0].ma === randomDice[1].ma && randomDice[0].ma !== randomDice[2].ma) || (randomDice[0].ma === randomDice[2].ma && randomDice[0].ma !== randomDice[1].ma) || (randomDice[1].ma === randomDice[2].ma && randomDice[1].ma !== randomDice[0].ma)) {
    if (demCap === 3 && demKhacNhau === 0) {
      demKhacNhau = 0;
      demCap = 0;
      resultDice.push(...Array(3).fill({ ma: listXucXac[listBao[bao]], hinhAnh: './img/' + listXucXac[listBao[bao]] + '.png' }));
      bao++;
      if (bao === 7) {
        bao = 1;
      }
    } else {
      demKhacNhau = 0;
      demCap++;
      if (remBef === 'nai') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        if (randomDice[0].ma !== 'cua') {
          resultDice.push({ ma: 'cua', hinhAnh: './img/cua.png' });
          resultDice.push({ ma: 'cua', hinhAnh: './img/cua.png' });
        } else {
          resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
          if (randomDice[1].ma !== 'cua') {
            resultDice.push({ ma: 'cua', hinhAnh: './img/cua.png' });
          } else {
            resultDice.push({ ma: randomDice[[1, 2, 3, 4, 6][Math.floor(Math.random() * 5)]].ma, hinhAnh: './img/' + randomDice[[1, 2, 3, 4, 6][Math.floor(Math.random() * 5)]].ma + '.png' });
          }
        }
      } else if (remBef === 'cua') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        if (randomDice[0].ma !== 'ga') {
          resultDice.push({ ma: 'ga', hinhAnh: './img/ga.png' });
          resultDice.push({ ma: 'ga', hinhAnh: './img/ga.png' });
        } else {
          resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
          if (randomDice[1].ma !== 'ga') {
            resultDice.push({ ma: 'ga', hinhAnh: './img/ga.png' });
          } else {
            resultDice.push({ ma: randomDice[[1, 2, 4, 5, 6][Math.floor(Math.random() * 5)]].ma, hinhAnh: './img/' + randomDice[[1, 2, 4, 5, 6][Math.floor(Math.random() * 5)]].ma + '.png' });
          }
        }
      } else if (remBef === 'ga') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        if (randomDice[0].ma !== 'tom') {
          resultDice.push({ ma: 'tom', hinhAnh: './img/tom.png' });
          resultDice.push({ ma: 'tom', hinhAnh: './img/tom.png' });
        } else {
          resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
          if (randomDice[1].ma !== 'tom') {
            resultDice.push({ ma: 'tom', hinhAnh: './img/tom.png' });
          } else {
            resultDice.push({ ma: randomDice[[1, 2, 3, 4, 5][Math.floor(Math.random() * 5)]].ma, hinhAnh: './img/' + randomDice[[1, 2, 3, 4, 5][Math.floor(Math.random() * 5)]].ma + '.png' });
          }
        }
      } else if (remBef === 'tom') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        if (randomDice[0].ma !== 'bau') {
          resultDice.push({ ma: 'bau', hinhAnh: './img/bau.png' });
          resultDice.push({ ma: 'bau', hinhAnh: './img/bau.png' });
        } else {
          resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
          if (randomDice[1].ma !== 'bau') {
            resultDice.push({ ma: 'bau', hinhAnh: './img/bau.png' });
          } else {
            resultDice.push({ ma: randomDice[[1, 3, 4, 5, 6][Math.floor(Math.random() * 5)]].ma, hinhAnh: './img/' + randomDice[[1, 3, 4, 5, 6][Math.floor(Math.random() * 5)]].ma + '.png' });
          }
        }
      } else if (remBef === 'bau') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        if (randomDice[0].ma !== 'ca') {
          resultDice.push({ ma: 'ca', hinhAnh: './img/ca.png' });
          resultDice.push({ ma: 'ca', hinhAnh: './img/ca.png' });
        } else {
          resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
          if (randomDice[1].ma !== 'ca') {
            resultDice.push({ ma: 'ca', hinhAnh: './img/ca.png' });
          } else {
            resultDice.push({ ma: randomDice[[1, 2, 3, 5, 6][Math.floor(Math.random() * 5)]].ma, hinhAnh: './img/' + randomDice[[1, 2, 3, 5, 6][Math.floor(Math.random() * 5)]].ma + '.png' });
          }
        }
      } else if (remBef === 'ca') {
        resultDice.push({ ma: randomDice[0].ma, hinhAnh: './img/' + randomDice[0].ma + '.png' });
        if (randomDice[0].ma !== 'nai') {
          resultDice.push({ ma: 'nai', hinhAnh: './img/nai.png' });
          resultDice.push({ ma: 'nai', hinhAnh: './img/nai.png' });
        } else {
          resultDice.push({ ma: randomDice[1].ma, hinhAnh: './img/' + randomDice[1].ma + '.png' });
          if (randomDice[1].ma !== 'nai') {
            resultDice.push({ ma: 'nai', hinhAnh: './img/nai.png' });
          } else {
            resultDice.push({ ma: randomDice[[2, 3, 4, 5, 6][Math.floor(Math.random() * 5)]].ma, hinhAnh: './img/' + randomDice[[2, 3, 4, 5, 6][Math.floor(Math.random() * 5)]].ma + '.png' });
          }
        }
      } else {
        resultDice = [...randomDice];
      }
    }
    remBef = resultDice[0].ma;

  } else {
    resultDice.push(...Array(3).fill({ ma: listXucXac[listBao[bao]], hinhAnh: './img/' + listXucXac[listBao[bao]] + '.png' }));
    bao++;
    if (bao === 7) {
      bao = 1;
    } 
    demKhacNhau = 0;
    demCap = 0;
    remBef = resultDice[0].ma;
  }
  
  return {
    ...state,
    mangXucXac: resultDice,
    danhSachCuoc: state.danhSachCuoc.map(dice => dice),
    demKhacNhau: demKhacNhau,
    demCap: demCap,
    bao: bao, 
    remBef: remBef
  };
};

export default bauCuaReducer;
