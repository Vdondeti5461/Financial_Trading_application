document.addEventListener('DOMContentLoaded', function () {
    // Sandbox Button Logic
    const sandboxButton = document.querySelector('.sandbox-btn');
    sandboxButton.addEventListener('click', function() {
        alert('Entering Sandbox. Practice trading with virtual money!');
    });

    // Investment Buttons Logic
    const investButtons = document.querySelectorAll('.company button');
    investButtons.forEach(button => {
        button.addEventListener('click', function() {
            const companyName = this.parentNode.firstChild.nextSibling.textContent;
            alert(`Invested in ${companyName}`);
        });
    });

    // Trading Actions Logic
    const buyButton = document.querySelector('.buy-button');
    const sellButton = document.querySelector('.sell-button');
    buyButton.addEventListener('click', () => alert('Stock purchased'));
    sellButton.addEventListener('click', () => alert('Stock sold'));

    // Chart Initialization
    // This would include logic for initializing and updating charts using Chart.js
});


document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("riskManagementModal");

    // Get the buttons that opens the modal
    var buyBtn = document.querySelector('.buy-button');
    var sellBtn = document.querySelector('.sell-button');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    buyBtn.onclick = function() {
        modal.style.display = "block";
    }

    sellBtn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var riskManagementModal = document.getElementById("riskManagementModal");
    var tradeConfirmationModal = document.getElementById("tradeConfirmationModal");

    var buyBtn = document.querySelector('.buy-button');
    var sellBtn = document.querySelector('.sell-button');
    var confirmBtn = document.getElementById("confirmTrade");

    var closeButtons = document.getElementsByClassName("close");

    function openModal(modal) {
        modal.style.display = "block";
    }

    function closeModal(modal) {
        modal.style.display = "none";
    }

    buyBtn.onclick = function() {
        openModal(riskManagementModal);
    }

    sellBtn.onclick = function() {
        openModal(riskManagementModal);
    }

    confirmBtn.onclick = function() {
        closeModal(riskManagementModal);
        openModal(tradeConfirmationModal);
    }

    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            closeModal(this.parentElement.parentElement);
        }
    }

    window.onclick = function(event) {
        if (event.target.className === "modal") {
            closeModal(event.target);
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var investButtons = document.querySelectorAll('.invest-btn');
    var investmentModal = document.getElementById("investmentSuccessModal");
    var span = document.getElementsByClassName("close")[0];

    investButtons.forEach(button => {
        button.addEventListener('click', function() {
            investmentModal.style.display = "block";
        });
    });

    span.onclick = function() {
        investmentModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == investmentModal) {
            investmentModal.style.display = "none";
        }
    }
});



document.addEventListener('DOMContentLoaded', function() {
    var stockSelection = document.getElementById('stock-selection');
    var currentPrice = document.getElementById('current-price');
    var marketCap = document.getElementById('market-cap');
    // ... other elements

    stockSelection.onchange = function() {
        // Placeholder for dynamic stock information update
        // This is where you'd update the content based on the selected stock
        currentPrice.textContent = '$310'; // Example data
        marketCap.textContent = '$55B';
        // ... update other elements
    };

    // Existing buy/sell button functionality...
});


document.addEventListener('DOMContentLoaded', function() {
    // Placeholder data for the chart
    var stockData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Stock Price',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [300, 310, 305, 310, 320, 330],
        }]
    };

    var config = {
        type: 'line',
        data: stockData,
        options: {}
    };

    var stockPerformanceChart = new Chart(
        document.getElementById('stockPerformanceChart'),
        config
    );

    // Other functionalities...
});


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('demoLoginForm');
    const sandboxEnv = document.querySelector('.sandbox-environment');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Login successful!');
        loginForm.style.display = 'none';
        sandboxEnv.style.display = 'block';
    });

    // Additional JavaScript for sandbox interactions
    // ... Existing functionality ...

function toggleInfo(button) {
    var infoContent = button.nextElementSibling;
    infoContent.style.display = infoContent.style.display === 'none' ? 'block' : 'none';
    button.textContent = infoContent.style.display === 'block' ? 'Show Less' : 'Learn More';
}


    document.addEventListener('DOMContentLoaded', function() {
        // Existing login functionality...
        // Simulate updating market statistics
        setInterval(function() {
            document.querySelectorAll('.market-stats .stat-item strong').forEach(function(item) {
                // This is just a placeholder. Real data would come from a financial data API.
                var currentValue = parseFloat(item.innerText.replace(',', ''));
                var change = (Math.random() - 0.5) * 10;
                var newValue = currentValue + change;
                item.innerText = newValue.toFixed(2);
                item.nextElementSibling.innerText = (change >= 0 ? "+" : "") + change.toFixed(2) + "%";
                item.nextElementSibling.className = "change " + (change >= 0 ? "positive" : "negative");
            });
        }, 5000); // Update every 5 seconds
    });
    
    
});


// new code js

document.addEventListener('DOMContentLoaded', function() {
    // Get the popup and its elements
    var popup = document.getElementById("popup");
    var btn = document.getElementById("Buy/Sell");
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the popup 
    btn.onclick = function() {
        popup.style.display = "block";
    }

    // When the user clicks on <span> (x), close the popup
    span.onclick = function() {
        popup.style.display = "none";
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    }
});

//demo

document.addEventListener('DOMContentLoaded', function() {
    // Handle demo login form submission
    document.getElementById('demoLoginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Add logic to handle login here
        alert('Demo account logged in!');
        document.querySelector('.sandbox-environment').style.display = 'block';
    });

    // Toggle market information
    document.querySelectorAll('.info-toggle').forEach(function(btn) {
        btn.addEventListener('click', function() {
            let infoContent = this.nextElementSibling;
            infoContent.style.display = infoContent.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Popup functionality
    var popup = document.getElementById("popup");
    var btn = document.getElementById("Buy/Sell");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        popup.style.display = "block";
    }
    span.onclick = function() {
        popup.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});






function login() {
    // Add your login validation logic here

    // Redirect to dashboard page upon successful login
    window.location.href = 'sandbox.html';
}


document.addEventListener('DOMContentLoaded', function() {
    // Ensuring the DOM is fully loaded before attaching the event listener
    var logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            logout();
        });
    }
});

function logout() {
    // Add any additional logout logic here

    // Redirect to login page
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('h1 span');
    spans.forEach((span, idx) => {
        // Set a timeout to delay the appearance of each letter
        setTimeout(() => {
            span.style.opacity = 1;
        }, idx * 300); // Increase the delay for each letter
    });
});
