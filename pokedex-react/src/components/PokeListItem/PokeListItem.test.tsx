import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import PokeListItem from '.';

// unit testing
test("Component: PokeListItem should call onClick function", () => {
    const mockOnClick = jest.fn(); // mock function 
    
    const pokeListItem = render(<PokeListItem onClick={mockOnClick} sprite="foo-bar"/>); // render in memory
    const pokeListButton = pokeListItem.getByRole("button"); // get button html 
    fireEvent.click(pokeListButton); // fire click event
    
    // assert mock is called and only called once
    expect(mockOnClick).toBeCalled(); 
    expect(mockOnClick).toHaveBeenCalledTimes(1);
});

// snapshot testing
test("Component: PokeListItem Should render correctly", () => {
    const mockOnClick = jest.fn();
    const snapshot = renderer.create(<PokeListItem sprite="http://foo.bar/example.png" onClick={mockOnClick}/>).toJSON();
    expect(snapshot).toMatchSnapshot();
});