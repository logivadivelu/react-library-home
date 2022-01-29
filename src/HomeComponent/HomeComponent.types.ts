interface Device {
	id: string;
	name: string;
	battery?: string;
}
export interface HomeComponentProps {
	devices?: [Device];
	onSelectDevice: Function;   
}