import React from 'react'
import DanhSachQuanCuoc from './DanhSachCuoc/DanhSachQuanCuoc'
import DanhSachXucXac from './DanhSachCuoc/DanhSachXucXac'

export default function Baucua() {
  return (
    <div className='container' style={{ margin: 'auto', width: '100vw', height: '100vh', userSelect: 'none' }}>
      <div style={{ height: '18%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src='./img/nen.png' alt='' style={{ width: '350px', marginTop: '15px' }} />
      </div>

      <div style={{ height: '82%', width: '100%' }}>
        <DanhSachQuanCuoc />

        <DanhSachXucXac />
      </div>
    </div>
  )
}
