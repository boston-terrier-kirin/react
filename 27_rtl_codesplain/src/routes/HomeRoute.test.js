import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import { createServer } from '../test/server';

createServer([
  {
    method: 'get',
    path: '/api/repositories',
    res: (req, res, ctx) => {
      const query = req.url.searchParams.get('q');
      const lang = query.split('language:')[1];

      return {
        items: [
          { id: 1, full_name: `${lang}_one` },
          { id: 2, full_name: `${lang}_two` },
        ],
      };
    },
  },
]);
//  ↑に集約
// const handlers = [
//   rest.get('/api/repositories', (req, res, ctx) => {
//     const query = req.url.searchParams.get('q');
//     const lang = query.split('language:')[1];
//
//     return res(
//       ctx.json({
//         items: [
//           { id: 1, full_name: `${lang}_one` },
//           { id: 2, full_name: `${lang}_two` },
//         ],
//       })
//     );
//   }),
// ];
//
// const server = setupServer(...handlers);
//
// beforeAll(() => {
//   server.listen();
// });

// afterEach(() => {
//   server.resetHandlers();
// });

// afterAll(() => {
//   server.close();
// });

test('renders two links for each language', async () => {
  render(
    <MemoryRouter>
      <HomeRoute />
    </MemoryRouter>
  );

  const langs = ['javascript', 'typescript', 'rust', 'go', 'python', 'java'];
  for (const lang of langs) {
    const links = await screen.findAllByRole('link', {
      name: new RegExp(`${lang}_`),
    });

    expect(links).toHaveLength(2);

    expect(links[0]).toHaveTextContent(`${lang}_one`);
    expect(links[1]).toHaveTextContent(`${lang}_two`);

    expect(links[0]).toHaveAttribute('href', `/repositories/${lang}_one`);
    expect(links[1]).toHaveAttribute('href', `/repositories/${lang}_two`);
  }
});
