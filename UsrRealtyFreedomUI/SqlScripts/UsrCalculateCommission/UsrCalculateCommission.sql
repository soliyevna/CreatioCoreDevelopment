update UsrRealtyFreedomUI
set UsrCommission = 
	case 
		when UsrOfferTypeId = 'CB9B3E7E-BDD2-4A72-8ED4-FB340FC72763' then UsrPrice * 0.02 -- sale, 2%
		when UsrOfferTypeId = '2A77EBA2-25BC-48E8-876B-46D3BDA1C358' then UsrPrice * 0.50 -- rental, 50%
	end
where UsrCommission = 0