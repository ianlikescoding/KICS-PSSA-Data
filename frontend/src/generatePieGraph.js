import bb, {pie} from "billboard.js"

export function GeneratePieGraph(bindTo) {
    var graph = bb.generate({
        data: {
            columns: [
            ["data1", 30],
            ["data2", 120]
            ],
            type: pie(), 
        },
        bindto: bindTo
        });
}