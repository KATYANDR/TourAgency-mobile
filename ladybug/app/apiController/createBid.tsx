import axios from 'axios';

const strapi_url = "172.20.10.2"; 

export interface Bid {
  name: string;
  phone: string;
  email: string;
  comment: string;
  code: string;
  TourName: string;
}

export async function createBid(bid: Bid): Promise<void | null> {
  try {
    const response = await axios.post(
      'http:/' + strapi_url + ':1337/api/bids',
      {
        data: bid,
      }
    );

    return response.data;
  } catch (error) {
    return null;
  }
}