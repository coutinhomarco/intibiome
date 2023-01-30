import { render, screen } from '@testing-library/react';
import App from './App';
import Articles from './components/Articles';

test('test if we’re here to help from about us page is rendered', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/we’re here to help./i);
  expect(linkElement).toBeInTheDocument();
});

test('test if whatever your age. from about us page - product technology - is rendered', async () => {
    render(<App />);
    const linkElement = await screen.findByText(/whatever your age../i);
    expect(linkElement).toBeInTheDocument();
  });

  test('test if home renders all images', async () => {
    render(<App />);
    const linkElement = await screen.queryAllByRole('img');
    expect(linkElement).toHaveLength(14);
});

test('test if 2 images have role = presentation', async () => {
    render(<App />);
    const linkElement = await screen.queryAllByRole(/presentation/i);
    expect(linkElement).toHaveLength(2);
});

test('test if first home image have proper alt text', async () => {
    render(<App />);
    const linkElement = await screen.getByAltText(/Demonstration of the products available/i);
    expect(linkElement).toBeInTheDocument();
});

test('test if second home image have proper alt text', async () => {
    render(<App />);
    const linkElement = await screen.getByAltText(/care for intimate microbiome/i);
    expect(linkElement).toBeInTheDocument();
});

test('test if articles container render the 3 articles', async () => {
    render(<Articles />);
    const linkElement = await screen.getAllByRole('img');
    expect(linkElement).toHaveLength(3);
});
