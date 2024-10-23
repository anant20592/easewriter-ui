import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import SideBar from './SideBar'

describe('div', () => {
    it('renders div without crashing', () => {
        const label = 'test'

        render(<SideBar children={label} />)
    })
})
