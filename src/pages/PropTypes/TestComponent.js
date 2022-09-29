import React from 'react'
import PropTypes from 'prop-types'

const TestComponent = (image, name, price) => {
    return(
        <div>
            Test component
        </div>
    )
}

TestComponent.propTypes = {
    image: PropTypes.object.isRequired,
    name:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired
}

TestComponent.defaultProps = {
    image:{},
    name: 'katongole',
    price: 2000
}

export default TestComponent