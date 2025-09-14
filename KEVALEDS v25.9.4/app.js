// KEVELADS Stock Market Application JavaScript

// Stock data
// KEVELADS Stock Market Application JavaScript

// Stock data
const stockData = [
    {
        "symbol": "SUZLON",
        "company_name": "Suzlon Energy Ltd",
        "current_price": 57.92,
        "market_cap": 79497.00,
        "sector": "Renewable Energy",
        "pe_ratio": 37.97,
        "eps": 1.53,
        "52_week_high": 86.04,
        "52_week_low": 46.15,
        "predicted_price_1_year": 94.50,
        "predicted_price_2_years": 123.00,
        "profit_potential_months": 12,
        "risk_level": "High",
        "analyst_rating": "BUY",
        "reasons": ["Renewable energy boom", "Government support for green energy", "Order book growth"]
    },
    {
        "symbol": "NMDC",
        "company_name": "NMDC Ltd",
        "current_price": 73.84,
        "market_cap": 65314.00,
        "sector": "Mining & Minerals",
        "pe_ratio": 10.00,
        "eps": 7.44,
        "52_week_high": 82.83,
        "52_week_low": 59.53,
        "predicted_price_1_year": 85.00,
        "predicted_price_2_years": 105.00,
        "profit_potential_months": 8,
        "risk_level": "Medium",
        "analyst_rating": "HOLD",
        "reasons": ["Strong iron ore demand", "Government backing", "Export opportunities"]
    },
    {
        "symbol": "NHPC",
        "company_name": "NHPC Ltd",
        "current_price": 78.58,
        "market_cap": 79748.00,
        "sector": "Power Generation",
        "pe_ratio": 26.07,
        "eps": 3.05,
        "52_week_high": 99.35,
        "52_week_low": 71.00,
        "predicted_price_1_year": 95.00,
        "predicted_price_2_years": 120.00,
        "profit_potential_months": 10,
        "risk_level": "High",
        "analyst_rating": "BUY",
        "reasons": ["Hydroelectric projects", "Clean energy demand", "Government PSU"]
    },
    {
        "symbol": "YESBANK",
        "company_name": "Yes Bank Ltd",
        "current_price": 20.36,
        "market_cap": 63871.00,
        "sector": "Banking",
        "pe_ratio": 23.32,
        "eps": 0.87,
        "52_week_high": 24.41,
        "52_week_low": 16.02,
        "predicted_price_1_year": 22.00,
        "predicted_price_2_years": 30.00,
        "profit_potential_months": 18,
        "risk_level": "High",
        "analyst_rating": "HOLD",
        "reasons": ["Banking sector recovery", "Digital transformation", "Asset quality improvement"]
    },
    {
        "symbol": "VODAFONEIDEA",
        "company_name": "Vodafone Idea Ltd",
        "current_price": 6.69,
        "market_cap": 71181.00,
        "sector": "Telecommunications",
        "pe_ratio": -2.60,
        "eps": -2.54,
        "52_week_high": 15.26,
        "52_week_low": 6.12,
        "predicted_price_1_year": 18.00,
        "predicted_price_2_years": 25.00,
        "profit_potential_months": 18,
        "risk_level": "Very High",
        "analyst_rating": "SPECULATIVE",
        "reasons": ["5G rollout potential", "Debt restructuring", "Telecom sector consolidation"]
    },
    {
        "symbol": "TRIDENT",
        "company_name": "Trident Ltd",
        "current_price": 28.38,
        "market_cap": 14462.00,
        "sector": "Textiles",
        "pe_ratio": 33.16,
        "eps": 0.86,
        "52_week_high": 40.20,
        "52_week_low": 23.11,
        "predicted_price_1_year": 58.00,
        "predicted_price_2_years": 72.00,
        "profit_potential_months": 14,
        "risk_level": "Medium",
        "analyst_rating": "BUY",
        "reasons": ["Export demand recovery", "Textile sector growth", "Capacity expansion"]
    },
    {
        "symbol": "RPOWER",
        "company_name": "Reliance Power Ltd",
        "current_price": 46.44,
        "market_cap": 19769.00,
        "sector": "Power Generation",
        "pe_ratio": 6.40,
        "eps": 7.47,
        "52_week_high": 76.49,
        "52_week_low": 29.21,
        "predicted_price_1_year": 65.00,
        "predicted_price_2_years": 80.00,
        "profit_potential_months": 14,
        "risk_level": "High",
        "analyst_rating": "BUY",
        "reasons": ["Power sector reforms", "Renewable energy transition", "Debt resolution"]
    },
    {
        "symbol": "SPICEJET",
        "company_name": "SpiceJet Ltd",
        "current_price": 35.80,
        "market_cap": 5060.00,
        "sector": "Aviation",
        "pe_ratio": 80.61,
        "eps": 0.44,
        "52_week_high": 79.90,
        "52_week_low": 31.25,
        "predicted_price_1_year": 50.00,
        "predicted_price_2_years": 65.00,
        "profit_potential_months": 18,
        "risk_level": "Very High",
        "analyst_rating": "HOLD",
        "reasons": ["Aviation sector recovery", "Financial challenges", "Route optimization"]
    },
    {
        "symbol": "SRICHAKRA",
        "company_name": "Sri Chakra Cement Ltd",
        "current_price": 87.47,
        "market_cap": 80.4,
        "sector": "Cement",
        "pe_ratio": -1.39,
        "eps": -60.38,
        "52_week_high": 89.30,
        "52_week_low": 3.00,
        "predicted_price_1_year": 45.00,
        "predicted_price_2_years": 55.00,
        "profit_potential_months": 20,
        "risk_level": "Very High",
        "analyst_rating": "SPECULATIVE",
        "reasons": ["Infrastructure demand", "Operational challenges", "Small scale operations"]
    },
    {
        "symbol": "MISHTANN",
        "company_name": "Mishtann Foods Ltd",
        "current_price": 5.88,
        "market_cap": 634.00,
        "sector": "Food Processing",
        "pe_ratio": 1.79,
        "eps": 3.21,
        "52_week_high": 15.88,
        "52_week_low": 4.28,
        "predicted_price_1_year": 9.00,
        "predicted_price_2_years": 12.00,
        "profit_potential_months": 12,
        "risk_level": "Medium",
        "analyst_rating": "BUY",
        "reasons": ["Food processing growth", "Export potential", "Strong fundamentals"]
    }
];

// Global variables
let filteredStocks = [...stockData];
let watchlist = new Set();
let currentStock = null;

// DOM elements - will be set after DOM loads
let stocksGrid, searchInput, sectorFilter, riskFilter, ratingFilter, sortBy, modal, closeModal, investmentAmount;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    stocksGrid = document.getElementById('stocksGrid');
    searchInput = document.getElementById('searchInput');
    sectorFilter = document.getElementById('sectorFilter');
    riskFilter = document.getElementById('riskFilter');
    ratingFilter = document.getElementById('ratingFilter');
    sortBy = document.getElementById('sortBy');
    modal = document.getElementById('stockModal');
    closeModal = document.getElementById('closeModal');
    investmentAmount = document.getElementById('investmentAmount');
    
    initializeApp();
    setupEventListeners();
    updateMarketStatus();
    populateFilters();
    renderStockCards();
    updateOverviewStats();
});

// Initialize application
function initializeApp() {
    console.log('KEVELADS Stock Market Application Initialized');
    updateCurrentDate();
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality - simplified to work immediately
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keyup', handleSearch);
    
    // Filter functionality
    sectorFilter.addEventListener('change', applyFilters);
    riskFilter.addEventListener('change', applyFilters);
    ratingFilter.addEventListener('change', applyFilters);
    sortBy.addEventListener('change', handleSort);
    
    // Modal functionality
    closeModal.addEventListener('click', hideModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideModal();
        }
    });
    
    // Investment calculator
    investmentAmount.addEventListener('input', updateCalculator);
    investmentAmount.addEventListener('keyup', updateCalculator);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            hideModal();
        }
    });
}

// Update market status based on current time
function updateMarketStatus() {
    const now = new Date();
    const hours = now.getHours();
    const isWeekend = now.getDay() === 0 || now.getDay() === 6;
    const isMarketHours = hours >= 9 && hours < 15;
    const isOpen = !isWeekend && isMarketHours;
    
    const statusElement = document.getElementById('marketStatus');
    const statusIndicator = statusElement.querySelector('.status-indicator');
    const statusText = statusElement.querySelector('.status-text');
    
    if (isOpen) {
        statusText.textContent = 'OPEN';
        statusIndicator.style.background = 'var(--color-positive)';
        statusText.style.color = 'var(--color-positive)';
    } else {
        statusText.textContent = 'CLOSED';
        statusIndicator.style.background = 'var(--color-negative)';
        statusText.style.color = 'var(--color-negative)';
        statusIndicator.style.animation = 'none';
    }
}

// Update current date
function updateCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    dateElement.textContent = new Date().toLocaleDateString('en-US', options);
}

// Populate filter dropdowns
function populateFilters() {
    const sectors = [...new Set(stockData.map(stock => stock.sector))];
    
    sectors.forEach(sector => {
        const option = document.createElement('option');
        option.value = sector;
        option.textContent = sector;
        sectorFilter.appendChild(option);
    });
}

// Update overview statistics
function updateOverviewStats() {
    const totalStocks = stockData.length;
    const avgReturns = stockData.reduce((sum, stock) => {
        const returns = ((stock.predicted_price_1_year - stock.current_price) / stock.current_price) * 100;
        return sum + returns;
    }, 0) / totalStocks;
    
    const sectorPerformance = {};
    stockData.forEach(stock => {
        const returns = ((stock.predicted_price_1_year - stock.current_price) / stock.current_price) * 100;
        if (!sectorPerformance[stock.sector]) {
            sectorPerformance[stock.sector] = [];
        }
        sectorPerformance[stock.sector].push(returns);
    });
    
    let topSector = '';
    let maxAvgReturn = 0;
    Object.keys(sectorPerformance).forEach(sector => {
        const avgReturn = sectorPerformance[sector].reduce((a, b) => a + b, 0) / sectorPerformance[sector].length;
        if (avgReturn > maxAvgReturn) {
            maxAvgReturn = avgReturn;
            topSector = sector;
        }
    });
    
    document.getElementById('totalStocks').textContent = totalStocks;
    document.getElementById('avgReturns').textContent = `+${avgReturns.toFixed(1)}%`;
    document.getElementById('topSector').textContent = topSector;
}

// Handle search functionality - simplified and fixed
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredStocks = [...stockData];
    } else {
        filteredStocks = stockData.filter(stock => 
            stock.symbol.toLowerCase().includes(searchTerm) ||
            stock.company_name.toLowerCase().includes(searchTerm) ||
            stock.sector.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply other filters on top of search results
    applyOtherFilters();
    renderStockCards();
}

// Apply filters (separate from search)
function applyFilters() {
    // Start with search results or all stocks
    let filtered = searchInput.value.trim() === '' ? [...stockData] : [...filteredStocks];
    
    applyOtherFilters();
    renderStockCards();
}

// Apply non-search filters
function applyOtherFilters() {
    let filtered = [...filteredStocks];
    
    // Apply sector filter
    const selectedSector = sectorFilter.value;
    if (selectedSector) {
        filtered = filtered.filter(stock => stock.sector === selectedSector);
    }
    
    // Apply risk filter
    const selectedRisk = riskFilter.value;
    if (selectedRisk) {
        filtered = filtered.filter(stock => stock.risk_level === selectedRisk);
    }
    
    // Apply rating filter
    const selectedRating = ratingFilter.value;
    if (selectedRating) {
        filtered = filtered.filter(stock => stock.analyst_rating === selectedRating);
    }
    
    filteredStocks = filtered;
}

// Handle sorting
function handleSort() {
    const sortField = sortBy.value;
    
    filteredStocks.sort((a, b) => {
        if (sortField === 'potential_return') {
            const aReturn = ((a.predicted_price_1_year - a.current_price) / a.current_price) * 100;
            const bReturn = ((b.predicted_price_1_year - b.current_price) / b.current_price) * 100;
            return bReturn - aReturn;
        }
        
        if (typeof a[sortField] === 'string') {
            return a[sortField].localeCompare(b[sortField]);
        }
        
        return sortField === 'profit_potential_months' ? 
            a[sortField] - b[sortField] : 
            b[sortField] - a[sortField];
    });
    
    renderStockCards();
}

// Render stock cards
function renderStockCards() {
    if (!stocksGrid) return;
    
    stocksGrid.innerHTML = '';
    
    if (filteredStocks.length === 0) {
        stocksGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                <h3>No stocks found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }
    
    filteredStocks.forEach(stock => {
        const stockCard = createStockCard(stock);
        stocksGrid.appendChild(stockCard);
    });
}

// Create individual stock card
function createStockCard(stock) {
    const card = document.createElement('div');
    card.className = 'stock-card';
    
    const priceChange = ((stock.predicted_price_1_year - stock.current_price) / stock.current_price) * 100;
    const priceChangeClass = priceChange >= 0 ? 'price-change--positive' : 'price-change--negative';
    const priceChangeIcon = priceChange >= 0 ? '↗' : '↘';
    
    const riskClass = `risk-badge--${stock.risk_level.toLowerCase().replace(' ', '-')}`;
    const ratingClass = `rating-badge--${stock.analyst_rating.toLowerCase()}`;
    
    const isInWatchlist = watchlist.has(stock.symbol);
    const watchlistButtonText = isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist';
    
    card.innerHTML = `
        <div class="stock-card__header">
            <div class="stock-card__title">
                <span class="stock-symbol">${stock.symbol}</span>
                <span class="stock-sector">${stock.sector}</span>
            </div>
            <h3 class="company-name">${stock.company_name}</h3>
        </div>
        
        <div class="stock-card__body">
            <div class="price-section">
                <div class="current-price">₹${stock.current_price.toFixed(2)}</div>
                <div class="price-change ${priceChangeClass}">
                    <span>${priceChangeIcon}</span>
                    <span>${priceChange.toFixed(2)}%</span>
                </div>
            </div>
            
            <div class="metrics-grid">
                <div class="metric-item">
                    <span class="metric-label">Market Cap:</span>
                    <span class="metric-value">₹${(stock.market_cap).toFixed(0)} Cr</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">P/E Ratio:</span>
                    <span class="metric-value">${stock.pe_ratio}</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">EPS:</span>
                    <span class="metric-value">₹${stock.eps}</span>
                </div>
                <div class="metric-item">
                    <span class="metric-label">52W High:</span>
                    <span class="metric-value">₹${stock['52_week_high']}</span>
                </div>
            </div>
            
            <div class="predictions">
                <h4>Price Predictions</h4>
                <div class="prediction-item">
                    <span>1 Year Target:</span>
                    <span>₹${stock.predicted_price_1_year.toFixed(2)}</span>
                </div>
                <div class="prediction-item">
                    <span>2 Year Target:</span>
                    <span>₹${stock.predicted_price_2_years.toFixed(2)}</span>
                </div>
            </div>
            
            <div class="profit-timeline">
                <div class="timeline-icon"></div>
                <div class="timeline-text">Expected profit in ${stock.profit_potential_months} months</div>
            </div>
            
            <div class="badges">
                <span class="risk-badge ${riskClass}">Risk: ${stock.risk_level}</span>
                <span class="rating-badge ${ratingClass}">${stock.analyst_rating}</span>
            </div>
            
            <ul class="reasons-list">
                ${stock.reasons.map(reason => `<li>${reason}</li>`).join('')}
            </ul>
            
            <div class="card-actions">
                <button class="btn btn--analyze" onclick="showStockModal('${stock.symbol}')">
                    Analyze Stock
                </button>
                <button class="btn btn--watchlist" onclick="toggleWatchlist('${stock.symbol}')" id="watchlist-${stock.symbol}">
                    ${watchlistButtonText}
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Show stock modal - made global and fixed
window.showStockModal = function(symbol) {
    const stock = stockData.find(s => s.symbol === symbol);
    if (!stock) return;
    
    currentStock = stock;
    
    // Update modal content
    document.getElementById('modalStockName').textContent = `${stock.company_name} (${stock.symbol})`;
    document.getElementById('modalCurrentPrice').textContent = `₹${stock.current_price.toFixed(2)}`;
    
    const priceChange = ((stock.predicted_price_1_year - stock.current_price) / stock.current_price) * 100;
    const priceChangeElement = document.getElementById('modalPriceChange');
    priceChangeElement.textContent = `${priceChange >= 0 ? '+' : ''}${priceChange.toFixed(2)}%`;
    priceChangeElement.className = `price-change ${priceChange >= 0 ? 'price-change--positive' : 'price-change--negative'}`;
    
    document.getElementById('modal1YearTarget').textContent = `₹${stock.predicted_price_1_year.toFixed(2)}`;
    document.getElementById('modal2YearTarget').textContent = `₹${stock.predicted_price_2_years.toFixed(2)}`;
    
    document.getElementById('modalPERatio').textContent = stock.pe_ratio;
    document.getElementById('modalEPS').textContent = `₹${stock.eps}`;
    document.getElementById('modalMarketCap').textContent = `₹${stock.market_cap.toFixed(0)} Cr`;
    document.getElementById('modal52WeekHigh').textContent = `₹${stock['52_week_high']}`;
    document.getElementById('modal52WeekLow').textContent = `₹${stock['52_week_low']}`;
    
    // Update reasons
    const reasonsList = document.getElementById('modalReasons');
    reasonsList.innerHTML = stock.reasons.map(reason => `<li>${reason}</li>`).join('');
    
    // Update risk and rating
    const riskLevel = document.getElementById('modalRiskLevel');
    riskLevel.textContent = stock.risk_level;
    riskLevel.className = `risk-level risk-badge--${stock.risk_level.toLowerCase().replace(' ', '-')}`;
    
    const analystRating = document.getElementById('modalAnalystRating');
    analystRating.textContent = stock.analyst_rating;
    analystRating.className = `analyst-rating rating-badge--${stock.analyst_rating.toLowerCase()}`;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Hide modal
function hideModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentStock = null;
}

// Toggle watchlist - made global and fixed
window.toggleWatchlist = function(symbol) {
    if (watchlist.has(symbol)) {
        watchlist.delete(symbol);
    } else {
        watchlist.add(symbol);
    }
    
    // Update button text immediately
    const button = document.getElementById(`watchlist-${symbol}`);
    if (button) {
        button.textContent = watchlist.has(symbol) ? 'Remove from Watchlist' : 'Add to Watchlist';
    }
}

// Update investment calculator
function updateCalculator() {
    const amount = parseFloat(investmentAmount.value) || 0;
    if (amount <= 0) {
        document.getElementById('returns1Year').textContent = '₹0';
        document.getElementById('returns2Years').textContent = '₹0';
        return;
    }
    
    // Calculate average returns based on filtered stocks
    const stocks = filteredStocks.length > 0 ? filteredStocks : stockData;
    
    const avg1YearReturn = stocks.reduce((sum, stock) => {
        return sum + ((stock.predicted_price_1_year - stock.current_price) / stock.current_price);
    }, 0) / stocks.length;
    
    const avg2YearReturn = stocks.reduce((sum, stock) => {
        return sum + ((stock.predicted_price_2_years - stock.current_price) / stock.current_price);
    }, 0) / stocks.length;
    
    const returns1Year = amount * avg1YearReturn;
    const returns2Years = amount * avg2YearReturn;
    
    document.getElementById('returns1Year').textContent = `₹${returns1Year.toLocaleString('en-IN', {maximumFractionDigits: 0})}`;
    document.getElementById('returns2Years').textContent = `₹${returns2Years.toLocaleString('en-IN', {maximumFractionDigits: 0})}`;
}

// Format currency for Indian Rupees
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
    }).format(amount);
}

// Update market status every minute
setInterval(updateMarketStatus, 60000);