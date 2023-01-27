import React from 'react'
import DanhSachQuanCuoc from './DanhSachCuoc/DanhSachQuanCuoc'
import DanhSachXucXac from './DanhSachCuoc/DanhSachXucXac'
  
export default function Baucua() {
  return (
    <div className='container-fluid'>
      <div className='text-center container pb-1'>
        <p style={{ fontSize: '45px', fontWeight: 'bold', marginTop: '50px' }}>BẦU CUA <br/> HUYCHE</p>
      </div>
      <div className='row container m-auto'>
        <div className='col-12 d-flex justify-content-center'> <DanhSachQuanCuoc/> </div>
        <div className='col-12 d-flex justify-content-center' style={{marginBottom: '20px'}}> <DanhSachXucXac/> </div>
      </div>
    </div>
  )
}
