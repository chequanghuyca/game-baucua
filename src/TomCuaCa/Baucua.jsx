import React from 'react'
import DanhSachQuanCuoc from './DanhSachCuoc/DanhSachQuanCuoc'
import DanhSachXucXac from './DanhSachCuoc/DanhSachXucXac'
  
export default function Baucua() {
  return (
    <div className='container' style={{ margin:'auto' }}>
      <div className='text-center'>
          <img src='./img/nen.png' alt='' style={{ width: '350px', marginTop: '15px' }} />
      </div>

      <div className='row'>
        <div className='col-12'> 
          <DanhSachQuanCuoc/> 
        </div>
        
        <div className='col-12'> 
          <DanhSachXucXac/> 
        </div>
      </div>
    </div>
  )
}
