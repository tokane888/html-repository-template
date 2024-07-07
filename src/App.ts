const TITLE: string = "速習typescript";

export function showMessage(): void {
	console.log(`ようこそ、${TITLE}！`);
}

export class Util {
	getVersion(): string {
		return "1.0.0";
	}
}
