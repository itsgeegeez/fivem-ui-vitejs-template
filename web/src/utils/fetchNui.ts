/**
 * Equivalent to $.post or fetch in jQuery or pure JS respectively.
 * @param eventName
 * @param data
 * @param mock
 * @returns
 */

export async function fetchNui<ReturnData = any, Params = any>(eventName: string, data: Params, mock?: ReturnData): Promise<ReturnData> {
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  if (!(window as any).GetParentResourceName() && mock) return mock;

  const resourceName = (window as any).GetParentResourceName();

  const resp = await fetch(`https://${resourceName}/${eventName}`, options);

  return await resp.json();
}
