import React from 'react'
import XucXac from './XucXac'
import { useDispatch, useSelector } from 'react-redux'

export default function DanhSachXucXac(props) {

  const dispatch = useDispatch();
  const mangXucXac = useSelector(state => state.BauCuaReducer.mangXucXac);
  const xx1 = mangXucXac[0].ma, xx2 = mangXucXac[1].ma, xx3 = mangXucXac[2].ma;

  return (<div style={{ height: '70%', width: '100%' }}>
    <div className='container' style={{ width: '300px', height: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='row justify-content-center'>
        <div className='col-4'>
          {String(xx1) === 'nai' ? <img src='./img/kq-nai.png' alt='' style={{ height: '35px' }} /> :
            String(xx1) === 'bau' ? <img src='./img/kq-bau.png' alt='' style={{ height: '35px' }} /> :
              String(xx1) === 'ga' ? <img src='./img/kq-ga.png' alt='' style={{ height: '35px' }} /> :
                String(xx1) === 'ca' ? <img src='./img/kq-ca.png' alt='' style={{ height: '35px' }} /> :
                  String(xx1) === 'cua' ? <img src='./img/kq-cua.png' alt='' style={{ height: '35px' }} /> :
                    <img src='./img/kq-tom.png' alt='' style={{ height: '35px' }} />
          }
        </div>
        <div className='col-4'>
          {String(xx2) === 'nai' ? <img src='./img/kq-nai.png' alt='' style={{ height: '35px' }} /> :
            String(xx2) === 'bau' ? <img src='./img/kq-bau.png' alt='' style={{ height: '35px' }} /> :
              String(xx2) === 'ga' ? <img src='./img/kq-ga.png' alt='' style={{ height: '35px' }} /> :
                String(xx2) === 'ca' ? <img src='./img/kq-ca.png' alt='' style={{ height: '35px' }} /> :
                  String(xx2) === 'cua' ? <img src='./img/kq-cua.png' alt='' style={{ height: '35px' }} /> :
                    <img src='./img/kq-tom.png' alt='' style={{ height: '35px' }} />
          }
        </div>
        <div className='col-4'>
          {String(xx3) === 'nai' ? <img src='./img/kq-nai.png' alt='' style={{ height: '35px' }} /> :
            String(xx3) === 'bau' ? <img src='./img/kq-bau.png' alt='' style={{ height: '35px' }} /> :
              String(xx3) === 'ga' ? <img src='./img/kq-ga.png' alt='' style={{ height: '35px' }} /> :
                String(xx3) === 'ca' ? <img src='./img/kq-ca.png' alt='' style={{ height: '35px' }} /> :
                  String(xx3) === 'cua' ? <img src='./img/kq-cua.png' alt='' style={{ height: '35px' }} /> :
                    <img src='./img/kq-tom.png' alt='' style={{ height: '35px' }} />
          }
        </div>
      </div>
    </div>


    <div className='container' style={{ width: '300px', height: '65%', textAlign: 'center', position: 'relative' }}>
      <img src='./img/dia.png' alt='' style={{ position: 'absolute', top: '20px', transform: 'translate(-50%, 3%)', width: '92%' }} />
      <div style={{ position: 'absolute', top: '60px', left: '110px' }}>
        <XucXac XucXacItem={mangXucXac[0]} />
      </div>

      <div style={{ position: 'absolute', top: '160px', left: '55px' }}>
        <XucXac XucXacItem={mangXucXac[1]} />
      </div>

      <div style={{ position: 'absolute', top: '160px', left: '160px' }}>
        <XucXac style={{ marginBotton: '20px' }} XucXacItem={mangXucXac[2]} />
      </div>

      <div id='moBat' className='image' style={{ width: '100%', height: '100%', position: 'relative', left: 0, display: 'none' }}
        onClick={() => {
          document.getElementById('xocBat').style.display = 'flex';
          document.getElementById('upBat').style.display = 'none';
        }}>

        <img src='./img/chen.png' alt='' style={{ transform: 'translate(-14%, -100%)', width: '160%', position: 'absolute', top: '315px', left: '-20px' }} />
        <i className='text-center fa fa-hand-paper-o' style={{ position: 'absolute', top: '90px', transform: 'translate(320%, -20%)', fontSize: '40px', left: '-20px', zIndex: '1' }} aria-hidden='true'></i>
      </div>
    </div>

    <div className='container' style={{ width: '100%', height: '20%', textAlign: 'center', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div id='xocBat' style={{ display: 'none', width: '100px', height: '40px', backgroundColor: 'blue', color: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: '20px', cursor: 'pointer' }}
        onClick={() => {
          document.getElementById('moBat').style.display = 'none';
          document.getElementById('xocBat').style.display = 'none';
          document.getElementById('upBat').style.display = 'flex';
          dispatch({ type: 'XOC_DIA' });
        }}
      > MỞ
      </div>

      <div id='upBat' style={{ display: 'flex', width: '100px', height: '40px', backgroundColor: 'green', color: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: '20px', cursor: 'pointer' }}
        onClick={() => {
          document.getElementById('moBat').style.display = 'flex';
          document.getElementById('xocBat').style.display = 'none';
        }}>
        ÚP
      </div>
    </div>
  </div>
  )
}
