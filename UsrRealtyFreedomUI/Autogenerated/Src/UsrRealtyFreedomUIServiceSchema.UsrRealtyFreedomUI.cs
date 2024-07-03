namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyFreedomUIServiceSchema

	/// <exclude/>
	public class UsrRealtyFreedomUIServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyFreedomUIServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyFreedomUIServiceSchema(UsrRealtyFreedomUIServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e13d1e46-abc0-4413-957e-e49f0e1f676c");
			Name = "UsrRealtyFreedomUIService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("2c4d4899-678b-4a5e-a672-e51fb0cb45bb");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,72,204,171,84,112,86,86,72,206,79,73,5,0,136,175,173,251,12,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e13d1e46-abc0-4413-957e-e49f0e1f676c"));
		}

		#endregion

	}

	#endregion

}

