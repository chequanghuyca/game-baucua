import React from 'react'
import XucXac from './XucXac'
import { useDispatch, useSelector } from 'react-redux'

export default function DanhSachXucXac(props) {

  const dispatch = useDispatch();
  const mangXucXac = useSelector(state => state.BauCuaReducer.mangXucXac)

  return ( <>
      <div className='container' style={{ width: '230px', height: '230px', textAlign:'center'}}>
        <div style={{ position: 'relative' }}>
          <img src='./img/dia.png' alt='' style={{ position: 'absolute', transform: 'translate(-50%, 3%)', width: '100%' }} />
        </div>

        <div className='row justify-content-center'>
          <div className='col-6' style={{marginTop: '30px'}}> 
            <XucXac XucXacItem={mangXucXac[0]}/>
          </div>
        </div>

        <div className='row justify-content-evenly'>
          <div className='col-6' style={{padding: '25px 0 0 30px'}}> 
            <XucXac XucXacItem={mangXucXac[1]}/>
          </div>

          <div className='col-6' style={{padding:'25px 30px 0 0'}}> 
            <XucXac style={{marginBotton:'20px'}} XucXacItem={mangXucXac[2]}/>
          </div>
        </div>
      </div>

      <div className='row justify-content-center'>
        <button id='xocBat' className='btn btn-success' style={{ display:'none', marginTop:'25px', borderRadius:'20%' }} 
          onClick={() => { 
            document.getElementById('moBat').style.display = 'none'; 
            document.getElementById('xocBat').style.display = 'none'; 
            document.getElementById('upBat').style.display = 'block'; 
            dispatch({type: 'XOC_DIA'});
          }}>

          <h1>MỞ</h1>
        </button>

        <button id='upBat' className='btn btn-primary' style={{ display:'block', marginTop:'25px', borderRadius:'20%'}} 
          onClick={() => { 
            document.getElementById('moBat').style.display = 'block'; 
            document.getElementById('xocBat').style.display = 'none';
          }}>

          <h1>ÚP</h1>
        </button>

        <div id='moBat' className='image' style={{ width: '250px', height: '250px', position: 'absolute', top: '8px', display: 'none' }} 
          onClick={() => {
            document.getElementById('xocBat').style.display = 'block'; 
            document.getElementById('upBat').style.display = 'none';
          }}>

          <img src='./img/chen.png' alt='' style={{ position: 'absolute', top: '100%', transform: 'translate(-14%, -105%)', width: '145%' }} />
          <i className='text-center fa fa-hand-pointer-o' style={{ position: 'absolute', top: '30%',  transform: 'translate(145%, -40%)', fontSize: '70px', zIndex: '1', color: 'red' }} aria-hidden='true'></i>
        </div>
      </div>  
    </>
  )
}
