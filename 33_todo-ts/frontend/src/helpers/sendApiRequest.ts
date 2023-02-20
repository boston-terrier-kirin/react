type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export async function sendApiRequest<T>(
  url: string,
  method: Method,
  data: unknown = {}
): Promise<T> {
  const res = await fetch(url, returnCorrectRequest(method, data));

  if (!res.ok) {
    throw new Error(`An error has occured: ${res.status}`);
  }

  return (await res.json()) as Promise<T>;
}

function returnCorrectRequest(method: Method, data: unknown = {}): RequestInit {
  if (method === 'GET') {
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  return {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}
