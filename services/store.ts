import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'events';

export type EventType = 'F' | 'W';

export interface IEvent {
    type: EventType,
    date: number
}

export class Store {
    public static storeEvent = async (event: IEvent, errorHandler: any) => {
        try {
            const events = await this.getEvents(errorHandler);
            events.push(event)
            console.log(events)
            await Store.storeEvents(events, errorHandler);
        } catch (e) {
            errorHandler(e instanceof Error ? e.message : e);
        }
    };
    public static storeEvents = async (events: Array<IEvent>, errorHandler: any) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(events));
        } catch (e) {
            errorHandler(e instanceof Error ? e.message : e);
        }
    };
    public static getEvents = async (errorHandler: any) => {
        try {
            const data = await AsyncStorage.getItem(STORAGE_KEY);
            return data != null ? JSON.parse(data) : null;
        } catch (e) {
            errorHandler(e instanceof Error ? e.message : e);
        }
    }
}