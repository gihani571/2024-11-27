console.log("hello");



fetch("money.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const { expenseCategories } = data;

    const labels = [];
    const values = [];
    

    
    Object.entries(expenseCategories).forEach(([category, value]) => {
        labels.push(category);
        values.push(value);
      });
      

    const ctx1 = document.getElementById("myChart");
    new Chart(ctx1, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            data: values,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(153, 102, 255)",
              "rgb(255, 159, 64)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    const { monthlySpending } = data;

    const months = [];
    const spent = [];
    

    
    Object.entries(monthlySpending).forEach(([month, value]) => {
        months.push(month);
        spent.push(value);
    
      });


    

    const ctx2 = document.getElementById("myChart2");
    new Chart(ctx2, {
      type: "line",
      data: {
        labels: months,
        datasets: [
          {
            label: "Monthly Spending",
            data: spent,
            backgroundColor:  "rgb(54, 162, 235)",
            borderColor:  "rgb(54, 168, 200)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },


    });
    const ctx3 = document.getElementById("myChart3");

    const { savingsGoals } = data;

    const currents = [];
    const goals = [];
    

    
    Object.entries(savingsGoals).forEach(([current, goal]) => {
        currents.push(current);
        goals.push(goal);
    
      });
      new Chart(ctx3, {
        type: "bar",
        data: {
          labels: currents,
          datasets: [
            {
              label: "Savings Goals",
              data: goals,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
  
  
      });










  })
 
