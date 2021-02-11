import React from 'react'
import PDF from '../shared/HIPAA-Business-Associate-Addendum.pdf'


class HomeIndex extends React.Component {
    render() {
        if (typeof window !== `undefined`) {
            window.open(PDF, "_self")
        }
        return (
            <span />
        )
    }
}

export default HomeIndex
