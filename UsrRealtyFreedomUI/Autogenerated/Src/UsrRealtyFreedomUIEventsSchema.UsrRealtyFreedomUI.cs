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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,211,215,87,200,173,84,72,46,74,172,2,146,249,41,169,10,229,153,57,57,10,73,169,10,25,169,69,169,138,92,0,65,89,42,206,31,0,0,0 };
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

