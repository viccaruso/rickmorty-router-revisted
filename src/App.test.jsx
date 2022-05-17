import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('<App />', () => {
  it('Renders a list of Rick & Morty characters and then finds Summer Smith', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const summer = await screen.findByAltText(
      'Image of Rick and Morty character Summer Smith'
    );
    expect(summer).toBeInTheDocument();
  });

  it('Renders a list of Rick & Morty characters, finds and clicks on Albert Einstein, and then clicks back to main page', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const imgLink = await screen.findByAltText(
      'Image of Rick and Morty character Albert Einstein'
    );

    userEvent.click(imgLink);

    const name = await screen.findByAltText(
      'Image of Rick and Morty character Albert Einstein'
    );
    expect(name).toBeInTheDocument();

    const status = screen.getByText('Status: Dead');
    expect(status.textContent).toEqual('Status: Dead');

    const backLink = screen.getByRole('link');
    userEvent.click(backLink);

    const jerry = await screen.findByText('Jerry Smith');
    expect(jerry).toBeInTheDocument();
  });
});
