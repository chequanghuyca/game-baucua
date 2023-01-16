import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DiemCuoc(props) {

  const diemCuoc = useSelector(state => state.BauCuaReducer.tongDiem)

  const renderDieuKien = () => {
    if (diemCuoc < 0) {
      return <span className='text-light'>{diemCuoc.toLocaleString()} VNĐ
      </span>

    } else {
      return <span className='text-light'>{diemCuoc.toLocaleString()} VNĐ
        {/* <button id='vayTien' className='btn btn-danger pb-2 mb-2' onClick={
          () => {
            dispatch({
              type: 'TANG_TIEN',
              diemCuoc
            })
          }
        }> VAY THÊM TIỀN + 10.000 VNĐ
        </button> */}

      </span>
    }
  }

  const dispatch = useDispatch();


  return (
    <div className="text-center container pb-1">
      <p style={{ fontSize: '45px', fontWeight: 'bold', marginTop: '50px' }}>GAME BẦU CUA</p>
      <p style={{ fontSize: '25px', fontWeight: 'bold'}}>HUY CHE</p>
    </div>
  )
}
