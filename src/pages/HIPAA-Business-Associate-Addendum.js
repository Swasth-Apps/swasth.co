import React from 'react'
import PDF from '../shared/HIPAA-Business-Associate-Addendum.pdf'


class HomeIndex extends React.Component {
    render() {
        window.open(PDF, "_self")
        return (
            <span />
        )
    }
}

export default HomeIndex