import React, { useState, useMemo } from 'react';
import { Calculator, IndianRupee, Percent, Clock, FileText, ArrowRight } from 'lucide-react';

interface EmiCalculatorProps {
  onOpenConsultation: () => void;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({ onOpenConsultation }) => {
  // Loan amount in Lakhs (default 75 Lakhs = 7,500,000)
  const [loanAmountLakhs, setLoanAmountLakhs] = useState<number>(75);
  // Annual interest rate (default 8.5%)
  const [interestRate, setInterestRate] = useState<number>(8.5);
  // Loan tenure in years (default 20 years)
  const [tenureYears, setTenureYears] = useState<number>(20);

  // Property value in Lakhs for Stamp Duty (default 100 Lakhs = 1 Crore)
  const [propertyValueLakhs, setPropertyValueLakhs] = useState<number>(100);

  // EMI Formula calculation
  const { monthlyEmi, totalInterest, totalPayment, principalShare, interestShare } = useMemo(() => {
    const principal = loanAmountLakhs * 100000;
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;

    if (monthlyRate === 0) {
      const emi = principal / totalMonths;
      return {
        monthlyEmi: emi,
        totalInterest: 0,
        totalPayment: principal,
        principalShare: 100,
        interestShare: 0,
      };
    }

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalPay = emi * totalMonths;
    const totInt = totalPay - principal;

    const pShare = Math.round((principal / totalPay) * 100);
    const iShare = 100 - pShare;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totInt),
      totalPayment: Math.round(totalPay),
      principalShare: pShare,
      interestShare: iShare,
    };
  }, [loanAmountLakhs, interestRate, tenureYears]);

  // Stamp Duty calculation in Karnataka
  const stampDutyCalculations = useMemo(() => {
    const propertyVal = propertyValueLakhs * 100000;
    // Standard Karnataka Stamp Duty for >45 Lakhs: 5% + 10% cess on duty + 2% surcharge on duty in urban areas = ~5.6%
    const stampDutyRate = propertyValueLakhs > 45 ? 0.056 : 0.03;
    const stampDuty = Math.round(propertyVal * stampDutyRate);
    // Registration fee: 1%
    const registrationFee = Math.round(propertyVal * 0.01);
    const totalGovtCharges = stampDuty + registrationFee;

    return {
      stampDuty,
      registrationFee,
      totalGovtCharges,
    };
  }, [propertyValueLakhs]);

  // Format currency into Indian Rupees
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#B8933D] tracking-wider uppercase mb-2">
            Financial Planning Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Bangalore Home Loan EMI & Stamp Duty Estimator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Accurately plan your monthly outlay and estimated Karnataka government registration charges before making a property commitment.
          </p>
        </div>

        {/* Two-Column Grid: Left Loan EMI, Right Karnataka Stamp Duty */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main EMI Calculator Column */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide">
              <Calculator className="w-4 h-4 text-[#B8933D]" />
              <span>Monthly Home Loan EMI Estimator</span>
            </div>

            {/* Slider 1: Loan Amount */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-700 font-medium">Loan Amount:</span>
                <span className="font-extrabold text-[#0A192F] tabular-nums text-base">
                  {formatINR(loanAmountLakhs * 100000)} ({loanAmountLakhs} Lakhs)
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="5"
                value={loanAmountLakhs}
                onChange={(e) => setLoanAmountLakhs(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A192F]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>₹20 Lakhs</span>
                <span>₹2.50 Cr</span>
                <span>₹5.00 Cr</span>
              </div>
            </div>

            {/* Slider 2: Interest Rate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-700 font-medium">Interest Rate (p.a.):</span>
                <span className="font-extrabold text-[#0A192F] tabular-nums text-base">
                  {interestRate.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min="7.5"
                max="12.0"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A192F]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>7.5% (Prime)</span>
                <span>9.5%</span>
                <span>12.0%</span>
              </div>
            </div>

            {/* Slider 3: Loan Tenure */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-700 font-medium">Tenure:</span>
                <span className="font-extrabold text-[#0A192F] tabular-nums text-base">
                  {tenureYears} Years ({tenureYears * 12} Months)
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A192F]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>5 Years</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Calculation Result Box */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
                <span className="text-xs text-slate-500 font-medium">Monthly EMI Payable:</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tabular-nums">
                  {formatINR(monthlyEmi)} <span className="text-xs font-normal text-slate-500">/month</span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Total Interest:</span>
                  <span className="font-bold text-slate-900 tabular-nums text-sm">{formatINR(totalInterest)}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Total Payment (P+I):</span>
                  <span className="font-bold text-slate-900 tabular-nums text-sm">{formatINR(totalPayment)}</span>
                </div>
              </div>

              {/* Visual Breakdown Bar */}
              <div className="space-y-1 pt-1">
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <div style={{ width: `${principalShare}%` }} className="bg-[#0A192F]" title="Principal" />
                  <div style={{ width: `${interestShare}%` }} className="bg-[#D4AF37]" title="Interest" />
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 pt-0.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#0A192F]" />
                    Principal ({principalShare}%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#D4AF37]" />
                    Interest ({interestShare}%)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Karnataka Stamp Duty & Registration Guide */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide">
              <FileText className="w-4 h-4 text-[#B8933D]" />
              <span>Karnataka Stamp Duty & Registration (2026 Guide)</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              In Karnataka, property buyers must pay Stamp Duty and Registration charges at the Sub-Registrar office during sale deed execution.
            </p>

            {/* Property Value Slider for Stamp Duty */}
            <div className="space-y-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-700 font-medium">Agreement Value:</span>
                <span className="font-bold text-slate-900 tabular-nums">
                  {formatINR(propertyValueLakhs * 100000)} ({propertyValueLakhs} L)
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="400"
                step="5"
                value={propertyValueLakhs}
                onChange={(e) => setPropertyValueLakhs(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B8933D]"
              />
            </div>

            {/* Itemized Govt Outlay */}
            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Stamp Duty + Cess (~5.6%):</span>
                <span className="font-bold text-slate-900 tabular-nums">{formatINR(stampDutyCalculations.stampDuty)}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Registration Fee (1.0%):</span>
                <span className="font-bold text-slate-900 tabular-nums">{formatINR(stampDutyCalculations.registrationFee)}</span>
              </div>
              <div className="flex justify-between py-2 border-t border-slate-200 font-semibold text-sm text-[#0A192F]">
                <span>Total Statutory Outlay:</span>
                <span className="text-base font-extrabold text-[#B8933D] tabular-nums">
                  {formatINR(stampDutyCalculations.totalGovtCharges)}
                </span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="font-semibold text-slate-800">Bank Loan Tie-Up Assistance:</div>
              <p>
                DHANVI Enterprises coordinates with leading nationalized and private banks (SBI, HDFC, ICICI, Bank of Baroda) for swift property valuation and project file approvals.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#0A192F] hover:bg-[#132A4A] rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Get Bank Loan & Legal Advice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
