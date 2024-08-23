import axios, { AxiosResponse } from 'axios';

interface TransactionResponse {
    status: string;
    message: string;
    result: any[];
}

export async function getTransactions(
    url:string,
    address: string,
    startblock: number = 0,
    endblock: number = 99999999,
    page: number = 1,
    offset: number = 1000,
    sort: 'asc' | 'desc' = 'asc'
): Promise<TransactionResponse> {

    try {
        const response: AxiosResponse<TransactionResponse> = await axios.get(url, {
            params: {
                module: 'account',
                action: 'txlist',
                address: address,
                startblock: startblock,
                endblock: endblock,
                page: page,
                offset: offset,
                sort: sort,
                apikey: process.env.EXPLORER_API_KEY
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
}


