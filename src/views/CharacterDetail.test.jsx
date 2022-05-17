import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('<CharacterDetails />', () => {
  it('Renders a list of Rick & Morty characters and then finds Morty Smith', async () => {
    render(
      <MemoryRouter initialEntries={['/character/2']}>
        <App />
      </MemoryRouter>
    );

    const morty = await screen.findByAltText(
      'Image of Rick and Morty character Morty Smith'
    );
    expect(morty).toBeInTheDocument();
  });
});
