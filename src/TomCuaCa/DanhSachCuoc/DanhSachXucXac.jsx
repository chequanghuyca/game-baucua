import React from 'react'
import XucXac from './XucXac'
import { useDispatch, useSelector } from 'react-redux'

export default function DanhSachXucXac(props) {

  const dispatch = useDispatch();
  const mangXucXac = useSelector(state => state.BauCuaReducer.mangXucXac);
  const xx1 = mangXucXac[0].ma, xx2 = mangXucXac[1].ma, xx3 = mangXucXac[2].ma;

  return (<>
      <div className='container' style={{ width: '300px', textAlign:'center', marginTop: '10px'}}>
        <div className='row justify-content-center'>
          <div className='col-4'> 
            {String(xx1) === 'nai' ? <img src='./img/kq-nai.png' alt='' style={{ height: '30px' }} /> : 
              String(xx1) === 'bau' ? <img src='./img/kq-bau.png' alt='' style={{ height: '30px' }} /> : 
              String(xx1) === 'ga' ? <img src='./img/kq-ga.png' alt='' style={{ height: '30px' }} /> : 
              String(xx1) === 'ca' ? <img src='./img/kq-ca.png' alt='' style={{ height: '30px' }} /> : 
              String(xx1) === 'cua' ? <img src='./img/kq-cua.png' alt='' style={{ height: '30px' }} /> : 
              <img src='./img/kq-tom.png' alt='' style={{ height: '30px' }} />
            }
          </div>
          <div className='col-4'> 
            {String(xx2) === 'nai' ? <img src='./img/kq-nai.png' alt='' style={{ height: '30px' }} /> : 
              String(xx2) === 'bau' ? <img src='./img/kq-bau.png' alt='' style={{ height: '30px' }} /> : 
              String(xx2) === 'ga' ? <img src='./img/kq-ga.png' alt='' style={{ height: '30px' }} /> : 
              String(xx2) === 'ca' ? <img src='./img/kq-ca.png' alt='' style={{ height: '30px' }} /> : 
              String(xx2) === 'cua' ? <img src='./img/kq-cua.png' alt='' style={{ height: '30px' }} /> : 
              <img src='./img/kq-tom.png' alt='' style={{ height: '30px' }} />
            }
          </div>
          <div className='col-4'> 
            {String(xx3) === 'nai' ? <img src='./img/kq-nai.png' alt='' style={{ height: '30px' }} /> : 
              String(xx3) === 'bau' ? <img src='./img/kq-bau.png' alt='' style={{ height: '30px' }} /> : 
              String(xx3) === 'ga' ? <img src='./img/kq-ga.png' alt='' style={{ height: '30px' }} /> : 
              String(xx3) === 'ca' ? <img src='./img/kq-ca.png' alt='' style={{ height: '30px' }} /> : 
              String(xx3) === 'cua' ? <img src='./img/kq-cua.png' alt='' style={{ height: '30px' }} /> : 
              <img src='./img/kq-tom.png' alt='' style={{ height: '30px' }} />
            }
          </div>
            
        </div>
      </div>
      
  
      <div className='container' style={{ width: '230px', height: '230px', textAlign:'center', marginTop: '25px'}}>
        <div style={{ position: 'relative' }}>
          <img src='./img/dia.png' alt='' style={{ position: 'absolute', transform: 'translate(-50%, 3%)', width: '100%' }} />
        </div>

        <div className='row justify-content-center'>
          <div className='col-6' style={{marginTop: '30px'}}> 
            <XucXac XucXacItem={mangXucXac[0]}/>
          </div>
        </div>

        <div className='row justify-content-evenly'>
          <div className='col-6' style={{padding: '8px 0 0 35px'}}> 
            <XucXac XucXacItem={mangXucXac[1]}/>
          </div>

          <div className='col-6' style={{padding:'8px 35px 0 0'}}> 
            <XucXac style={{marginBotton:'20px'}} XucXacItem={mangXucXac[2]}/>
          </div>
        </div>
      </div>

      <div className='row justify-content-center'>
        <div id='xocBat' style={{ display:'none'}} 
          onClick={() => { 
            document.getElementById('moBat').style.display = 'none'; 
            document.getElementById('xocBat').style.display = 'none'; 
            document.getElementById('upBat').style.display = 'block'; 
            dispatch({type: 'XOC_DIA'});
          }}>

          <img className='chen' src='./img/mo.png' alt='' />
        </div>

        <div id='upBat' style={{ display:'block'}} 
          onClick={() => { 
            document.getElementById('moBat').style.display = 'block'; 
            document.getElementById('xocBat').style.display = 'none';
          }}>

          <img className='chen' src='./img/up.png' alt='' />
        </div>

        <div id='moBat' className='image' style={{ width: '250px', height: '250px', position: 'absolute', top: '8px', display: 'none' }} 
          onClick={() => {
            document.getElementById('xocBat').style.display = 'block'; 
            document.getElementById('upBat').style.display = 'none';
            document.getElementById('vanTruoc').style.display = 'block';
          }}>

          <img src='./img/chen.png' alt='' style={{ position: 'absolute', top: '110%', transform: 'translate(-14%, -100%)', width: '145%' }} />
          <i className='text-center fa fa-hand-pointer-o' style={{ position: 'absolute', top: '30%',  transform: 'translate(145%, -40%)', fontSize: '70px', zIndex: '1', color: 'red' }} aria-hidden='true'></i>
        </div>
      </div>  
    </>
  )
}
