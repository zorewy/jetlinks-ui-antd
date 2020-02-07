import request from '@/utils/request';

export async function list(params?: any) {
  return request(`/jetlinks/network/config/_query/no-paging`, {
    method: 'GET',
    params,
  });
}

export async function save(params?: any) {
  return request(`/jetlinks/network/config/`, {
    method: 'PATCH',
    data: params,
  });
}

export async function remove(id: string) {
  return request(`/jetlinks/network/config/${id}`, {
    method: 'DELETE',
  });
}

export async function support() {
  return request(`/jetlinks/network/config/supports`, {
    method: 'GET',
  });
}

export async function changeStatus(id: string, type: string) {
  return request(`/jetlinks/network/config/${id}/${type}`, {
    method: 'POST',
  });
}

export async function debugMqttClient(id: string, action: string, type: string, data: any) {
  return request(`/jetlinks/network/mqtt/client/${id}/${action}/${type}`, {
    method: 'POST',
    data,
  });
}

export async function debugTcpClient(id: string, type: string, data: any) {
  return request(`/jetlinks/network/tcp/client/${id}/_send/${type}`, {
    method: 'POST',
    data,
  });
}

export async function debugCoapClient(id: string, data) {
  // network / coap / client / 1214370069626740736 / _send
  return request(`/jetlinks/network/coap/client/${id}/_send`, {
    method: 'POST',
    data,
  });
}
