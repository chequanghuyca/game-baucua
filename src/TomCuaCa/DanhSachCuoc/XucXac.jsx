import React, { Fragment } from 'react'

export default function XucXac(props) {
    let { XucXacItem } = props
    return (
        <Fragment>
            <img src={XucXacItem.hinhAnh} alt='' style={{ width: '60px' }} />
        </Fragment>
    )
}
