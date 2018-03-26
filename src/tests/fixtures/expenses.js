import moment from "moment";

export default [
	{
		id: "1",
		description: "Some",
		note: "",
		amount: 100,
		createdAt: moment(0).add(1, "days").valueOf()
	},{
		id: "2",
		description: "Disc2",
		note: "",
		amount: 1000,
		createdAt: moment(0).subtract(4, "days").valueOf()
	},{
		id: "3",
		description: "Disc3",
		note: "",
		amount: 10000,
		createdAt: moment(0).add(4, "days").valueOf()
	}
];