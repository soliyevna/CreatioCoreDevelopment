namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyFreedomUIEventsSchema

	/// <exclude/>
	public class UsrRealtyFreedomUIEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyFreedomUIEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyFreedomUIEventsSchema(UsrRealtyFreedomUIEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9896ab86-daef-47ff-889a-8bfed9dfbba2");
			Name = "UsrRealtyFreedomUIEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("2c4d4899-678b-4a5e-a672-e51fb0cb45bb");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,79,219,64,16,189,35,241,31,70,86,15,182,20,173,224,90,104,36,18,133,42,18,106,43,226,112,169,56,108,214,19,179,104,63,172,221,117,104,138,248,239,157,245,58,37,56,65,48,23,123,199,111,222,190,247,60,134,107,244,13,23,8,37,58,199,189,93,7,54,181,102,45,235,214,241,32,173,57,61,121,62,61,1,170,214,75,83,195,98,235,3,234,139,253,214,254,160,214,214,188,251,209,33,155,153,32,131,68,255,25,12,155,109,208,132,29,244,119,215,222,118,189,27,73,34,12,186,124,33,30,80,243,31,228,1,190,65,182,244,238,22,185,10,219,107,135,88,89,189,156,103,197,125,154,110,218,149,146,2,132,226,222,67,2,29,225,131,175,48,225,30,143,124,73,44,125,18,123,132,118,67,218,101,133,176,177,178,130,159,102,193,55,228,40,183,171,71,20,1,60,154,10,221,8,18,225,4,215,100,175,163,189,114,181,7,44,94,233,246,152,99,173,72,5,251,207,182,163,193,226,226,45,44,241,130,235,252,80,2,121,106,20,105,96,0,174,80,72,205,21,52,78,138,24,87,154,98,223,49,148,219,6,171,169,85,173,54,119,92,181,120,217,67,199,121,140,244,87,196,103,195,171,229,26,242,196,52,134,243,179,93,21,111,65,3,87,177,144,205,253,148,27,129,10,43,18,17,92,139,196,124,136,243,193,197,213,160,229,244,188,198,18,117,163,120,136,178,13,62,193,141,21,92,201,191,124,165,112,209,225,242,222,204,210,163,163,237,53,20,62,173,46,187,69,111,91,39,8,100,29,177,140,224,240,158,88,71,22,39,173,94,54,130,236,224,46,207,186,144,230,190,180,118,34,235,116,202,10,86,218,94,203,48,170,88,31,25,36,99,169,193,174,173,211,60,228,3,227,36,228,156,157,77,190,28,252,135,88,225,193,217,167,46,152,217,31,129,77,180,190,155,31,194,95,94,143,253,43,61,94,254,1,2,86,188,180,5,4,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("42af38ee-6f8a-e8b4-2cbd-b1b3ca59481e"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("2c4d4899-678b-4a5e-a672-e51fb0cb45bb"),
				CreatedInSchemaUId = new Guid("9896ab86-daef-47ff-889a-8bfed9dfbba2"),
				ModifiedInSchemaUId = new Guid("9896ab86-daef-47ff-889a-8bfed9dfbba2")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9896ab86-daef-47ff-889a-8bfed9dfbba2"));
		}

		#endregion

	}

	#endregion

}

