var Dashboard = (function () {
    return {
        initialize: function (panel) {
            setTimeout(function () {
                var chartForOrders = new LineChart({chartTitle: 'Orders', chartLabel: "Orders Per Month"})
                chartForOrders.initialize(panel.querySelector("#ChartForOrders"))
                var chartForSales = new LineChart({chartTitle: 'Sales', chartLabel: "Sales Per Month"})
                chartForSales.initialize(panel.querySelector("#ChartForSales"))
                var chartForSiteReach = new LineChart({chartTitle: 'Site Reached', chartLabel: "Site Reached Per Month"})
                chartForSiteReach.initialize(panel.querySelector("#ChartForSiteReach"))
                var chartForProductReturns = new LineChart({chartTitle: 'Products Return', chartLabel: "Products Return Per Month"})
                chartForProductReturns.initialize(panel.querySelector("#ChartForProductReturns"))
                var chartForEarnings = new LineChart({chartTitle: 'Earnings', chartLabel: "Earnings Per Month"})
                chartForEarnings.initialize(panel.querySelector("#ChartForEarnings"))
                var chartForExpenditures = new LineChart({chartTitle: 'Expenditures', chartLabel: "Expenditures Per Month"})
                chartForExpenditures.initialize(panel.querySelector("#ChartForExpenditures"))
                var chartForMonthlyProfit = new LineChart({chartTitle: 'Monthly Profit', chartLabel: "Monthly Profit Per Month"})
                chartForMonthlyProfit.initialize(panel.querySelector("#ChartForMonthlyProfit"))
            }, 100)
        }
    }
}())

/**
 * initParams should contain a js object containing ->
 * labelsForData: []
 * data: []
 * chartTitle: String
 * chartLabel: String
 * chartType: String
 * */
var LineChart = (function (initParams) {
    var presets = window.chartColors;
    var utils = Samples.utils;
    var inputs = {
        min: -100,
        max: 100,
        count: 8,
        decimals: 2,
        continuity: 1
    };

    var options = {
        maintainAspectRatio: false,
        spanGaps: false,
        elements: {
            line: {
                tension: 0.000001
            }
        },
        plugins: {
            filler: {
                propagate: false
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    maxRotation: 0
                }
            }]
        }
    };
    function generateData(config) {
        return utils.numbers(Chart.helpers.merge(inputs, config || {}));
    }

    function generateLabels(config) {
        return utils.months(Chart.helpers.merge({
            count: inputs.count,
            section: 3
        }, config || {}));
    }

    return {
        initialize: function (chartElement) {
            utils.srand(8);
            new Chart(chartElement, {
                type: 'line',
                data: {
                    labels: generateLabels(),
                    datasets: [{
                        backgroundColor: utils.transparentize(presets.red),
                        borderColor: presets.red,
                        data: generateData(),
                        label: initParams.chartLabel,
                        fill: false
                    }]
                },
                options: Chart.helpers.merge(options, {
                    title: {
                        text: initParams.chartTitle,
                        display: true
                    }
                })
            });
        }
    }
})