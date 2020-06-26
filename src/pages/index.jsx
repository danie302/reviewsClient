import React, {Fragment} from 'react'

export default function App(props) {
    const {children} = props
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}
