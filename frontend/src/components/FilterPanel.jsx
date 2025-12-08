import Select from 'react-select';

export default function FilterPanel({
    regions, setRegions,
    genders, setGenders,
    categories, setCategories,
    paymentMethods, setPaymentMethods,
    dateFrom, setDateFrom,
    dateTo, setDateTo,
    ageRange, setAgeRange
}) {
    const regionOptions = [
        { value: 'East', label: 'East' },
        { value: 'West', label: 'West' },
        { value: 'North', label: 'North' },
        { value: 'South', label: 'South' }
    ];
    const genderOptions = [{ value: 'Male', label: 'Male' }, { value: 'Female', label: 'Female' }];
    const categoryOptions = [
        { value: 'Beauty', label: 'Beauty' },
        { value: 'Electronics', label: 'Electronics' },
        { value: 'Clothing', label: 'Clothing' }
    ];
    const paymentOptions = [
        { value: 'Cash', label: 'Cash' },
        { value: 'Credit Card', label: 'Credit Card' },
        { value: 'UPI', label: 'UPI' },
        { value: 'Wallet', label: 'Wallet' }
    ];

    return (
        <div className="filter-panel" style={{ display: 'flex', flexDirection: 'row' }}>
            <Select isMulti options={regionOptions} placeholder="Customer Region" onChange={setRegions} />
            <Select isMulti options={genderOptions} placeholder="Gender" onChange={setGenders} />
            <Select isMulti options={categoryOptions} placeholder="Product Category" onChange={setCategories} />
            <Select isMulti options={paymentOptions} placeholder="Payment Method" onChange={setPaymentMethods} />
            <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
            <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />

        </div>
    );
}
