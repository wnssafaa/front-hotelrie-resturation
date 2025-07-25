export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  UUID: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type AccessLevel = {
  __typename?: 'AccessLevel';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  level: Scalars['JSON']['output'];
  model?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type Action = {
  __typename?: 'Action';
  default: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
  translate?: Maybe<Scalars['String']['output']>;
  type: ActionTypeEnum;
};

export enum ActionTypeEnum {
  Boolean = 'boolean',
  Level = 'level'
}

export type AddressFilterInput = {
  AND?: InputMaybe<AddressFilterInput>;
  NOT?: InputMaybe<AddressFilterInput>;
  OR?: InputMaybe<AddressFilterInput>;
  city?: InputMaybe<CityFilterInput>;
  content?: InputMaybe<StrFilterLookup>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  postalCode?: InputMaybe<StrFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type AddressOrderInput = {
  city?: InputMaybe<CityOrderInput>;
  content?: InputMaybe<Ordering>;
  createdAt?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  postalCode?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type AddressType = {
  __typename?: 'AddressType';
  city?: Maybe<CityType>;
  content: Scalars['String']['output'];
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  postalCode: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AppConfigMutation = {
  __typename?: 'AppConfigMutation';
  save?: Maybe<Scalars['JSON']['output']>;
};


export type AppConfigMutationSaveArgs = {
  key: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
};

export type Authentication = {
  __typename?: 'Authentication';
  accessToken: Scalars['String']['output'];
  profile: FtProfileType;
  refreshToken: Scalars['String']['output'];
  staff?: Maybe<FtBaseStaffType>;
  user: FtUserType;
};

export type Authenticator = {
  __typename?: 'Authenticator';
  authenticate: Authentication;
  logout: Scalars['Boolean']['output'];
  refreshSession: Authentication;
};


export type AuthenticatorAuthenticateArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type AuthenticatorLogoutArgs = {
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type AuthenticatorRefreshSessionArgs = {
  refreshToken: Scalars['String']['input'];
};

export type BedTypeFilterInput = {
  AND?: InputMaybe<BedTypeFilterInput>;
  NOT?: InputMaybe<BedTypeFilterInput>;
  OR?: InputMaybe<BedTypeFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<StrFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  room?: InputMaybe<RoomFilterInput>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type BedTypeInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  label: Scalars['String']['input'];
};

export type BedTypeOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  label?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  room?: InputMaybe<RoomOrderInput>;
  updatedAt?: InputMaybe<Ordering>;
};

export type BedTypePartialInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type BedTypeType = {
  __typename?: 'BedTypeType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  room?: Maybe<Array<RoomType>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BedTypeTypeRoomArgs = {
  filters?: InputMaybe<RoomFilterInput>;
  order?: InputMaybe<RoomOrderInput>;
};

export type BedTypeTypeMutation = {
  __typename?: 'BedTypeTypeMutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: BedTypeType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: BedTypeType;
};


export type BedTypeTypeMutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type BedTypeTypeMutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type BedTypeTypeMutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type BedTypeTypeMutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type BedTypeTypeMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type BedTypeTypeMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type BedTypeTypeMutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type BedTypeTypeMutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type BedTypeTypeMutationPartialSaveArgs = {
  data: BedTypePartialInput;
};


export type BedTypeTypeMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type BedTypeTypeMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type BedTypeTypeMutationSaveArgs = {
  data: BedTypeInput;
};

export type BedTypeTypePageInfo = {
  __typename?: 'BedTypeTypePageInfo';
  data: Array<BedTypeType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type BuildingFilterInput = {
  AND?: InputMaybe<BuildingFilterInput>;
  NOT?: InputMaybe<BuildingFilterInput>;
  OR?: InputMaybe<BuildingFilterInput>;
  code?: InputMaybe<StrFilterLookup>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  floor?: InputMaybe<FloorFilterInput>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StrFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type BuildingInput = {
  code: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type BuildingOrderInput = {
  code?: InputMaybe<Ordering>;
  createdAt?: InputMaybe<Ordering>;
  floor?: InputMaybe<FloorOrderInput>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type BuildingPartialInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BuildingType = {
  __typename?: 'BuildingType';
  code: Scalars['String']['output'];
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  floor?: Maybe<Array<FloorType>>;
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BuildingTypeFloorArgs = {
  filters?: InputMaybe<FloorFilterInput>;
  order?: InputMaybe<FloorOrderInput>;
};

export type BuildingTypeMutation = {
  __typename?: 'BuildingTypeMutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: BuildingType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: BuildingType;
};


export type BuildingTypeMutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type BuildingTypeMutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type BuildingTypeMutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type BuildingTypeMutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type BuildingTypeMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type BuildingTypeMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type BuildingTypeMutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type BuildingTypeMutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type BuildingTypeMutationPartialSaveArgs = {
  data: BuildingPartialInput;
};


export type BuildingTypeMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type BuildingTypeMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type BuildingTypeMutationSaveArgs = {
  data: BuildingInput;
};

export type BuildingTypePageInfo = {
  __typename?: 'BuildingTypePageInfo';
  data: Array<BuildingType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type CityFilterInput = {
  AND?: InputMaybe<CityFilterInput>;
  NOT?: InputMaybe<CityFilterInput>;
  OR?: InputMaybe<CityFilterInput>;
  country?: InputMaybe<CountryFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  fullName?: InputMaybe<StrFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  shortName?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type CityOrderInput = {
  country?: InputMaybe<CountryOrderInput>;
  createdAt?: InputMaybe<Ordering>;
  fullName?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  shortName?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type CityType = {
  __typename?: 'CityType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  country?: Maybe<CountryType>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  fullName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  shortName: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CityTypePageInfo = {
  __typename?: 'CityTypePageInfo';
  data: Array<CityType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type ContactInfoFilterInput = {
  AND?: InputMaybe<ContactInfoFilterInput>;
  NOT?: InputMaybe<ContactInfoFilterInput>;
  OR?: InputMaybe<ContactInfoFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  emails?: InputMaybe<JsonFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  phoneNumbers?: InputMaybe<JsonFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type ContactInfoOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  emails?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  phoneNumbers?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type ContactInfoType = {
  __typename?: 'ContactInfoType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  emails: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  phoneNumbers: Scalars['JSON']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CountryFilterInput = {
  AND?: InputMaybe<CountryFilterInput>;
  NOT?: InputMaybe<CountryFilterInput>;
  OR?: InputMaybe<CountryFilterInput>;
  city?: InputMaybe<CityFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  fullName?: InputMaybe<StrFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  shortName?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type CountryOrderInput = {
  city?: InputMaybe<CityOrderInput>;
  createdAt?: InputMaybe<Ordering>;
  fullName?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  shortName?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type CountryType = {
  __typename?: 'CountryType';
  city?: Maybe<Array<CityType>>;
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  fullName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  shortName: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CountryTypeCityArgs = {
  filters?: InputMaybe<CityFilterInput>;
  order?: InputMaybe<CityOrderInput>;
};

export type CountryTypePageInfo = {
  __typename?: 'CountryTypePageInfo';
  data: Array<CountryType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type DateFilterLookup = {
  contains?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  exact?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  iContains?: InputMaybe<Scalars['Date']['input']>;
  iEndsWith?: InputMaybe<Scalars['Date']['input']>;
  iExact?: InputMaybe<Scalars['Date']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['Date']['input']>;
  inList?: InputMaybe<Array<Scalars['Date']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  range?: InputMaybe<Array<Scalars['Date']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DatetimeFilterLookup = {
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  exact?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  iContains?: InputMaybe<Scalars['DateTime']['input']>;
  iEndsWith?: InputMaybe<Scalars['DateTime']['input']>;
  iExact?: InputMaybe<Scalars['DateTime']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['DateTime']['input']>;
  inList?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  range?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DefaultValuesConfigMutation = {
  __typename?: 'DefaultValuesConfigMutation';
  save?: Maybe<Scalars['JSON']['output']>;
};


export type DefaultValuesConfigMutationSaveArgs = {
  key: Scalars['String']['input'];
  mine?: Scalars['Boolean']['input'];
  value: Scalars['JSON']['input'];
};

export type DepartmentFilterInput = {
  AND?: InputMaybe<DepartmentFilterInput>;
  NOT?: InputMaybe<DepartmentFilterInput>;
  OR?: InputMaybe<DepartmentFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StrFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  service?: InputMaybe<ServiceFilterInput>;
  site?: InputMaybe<SiteFilterInput>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type DepartmentInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  site?: InputMaybe<SitePartialInput>;
};

export type DepartmentMutation = {
  __typename?: 'DepartmentMutation';
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  partialSave: DepartmentType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: DepartmentType;
};


export type DepartmentMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type DepartmentMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type DepartmentMutationPartialSaveArgs = {
  data: DepartmentPartialInput;
};


export type DepartmentMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type DepartmentMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type DepartmentMutationSaveArgs = {
  data: DepartmentInput;
};

export type DepartmentOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  service?: InputMaybe<ServiceOrderInput>;
  site?: InputMaybe<SiteOrderInput>;
  updatedAt?: InputMaybe<Ordering>;
};

export type DepartmentPartialInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<SitePartialInput>;
};

export type DepartmentType = {
  __typename?: 'DepartmentType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  service?: Maybe<Array<ServiceType>>;
  site?: Maybe<SiteType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DepartmentTypeServiceArgs = {
  filters?: InputMaybe<ServiceFilterInput>;
  order?: InputMaybe<ServiceOrderInput>;
};

export type DepartmentTypePageInfo = {
  __typename?: 'DepartmentTypePageInfo';
  data: Array<DepartmentType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type DietFilterInput = {
  AND?: InputMaybe<DietFilterInput>;
  NOT?: InputMaybe<DietFilterInput>;
  OR?: InputMaybe<DietFilterInput>;
  code?: InputMaybe<StrFilterLookup>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  description?: InputMaybe<StrFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<StrFilterLookup>;
  meal?: InputMaybe<MealFilterInput>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type DietInput = {
  code: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  label: Scalars['String']['input'];
};

export type DietOrderInput = {
  code?: InputMaybe<Ordering>;
  createdAt?: InputMaybe<Ordering>;
  description?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isCanceled?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  label?: InputMaybe<Ordering>;
  meal?: InputMaybe<MealOrderInput>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type DietPartialInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type DietType = {
  __typename?: 'DietType';
  code: Scalars['String']['output'];
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isCanceled: Scalars['Boolean']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  meal?: Maybe<Array<MealType>>;
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DietTypeMealArgs = {
  filters?: InputMaybe<MealFilterInput>;
  order?: InputMaybe<MealOrderInput>;
};

export type DietTypeMutation = {
  __typename?: 'DietTypeMutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: DietType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: DietType;
};


export type DietTypeMutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type DietTypeMutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type DietTypeMutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type DietTypeMutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type DietTypeMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type DietTypeMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type DietTypeMutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type DietTypeMutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type DietTypeMutationPartialSaveArgs = {
  data: DietPartialInput;
};


export type DietTypeMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type DietTypeMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type DietTypeMutationSaveArgs = {
  data: DietInput;
};

export type DietTypePageInfo = {
  __typename?: 'DietTypePageInfo';
  data: Array<DietType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type FloatFilterLookup = {
  contains?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  exact?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  iContains?: InputMaybe<Scalars['Float']['input']>;
  iEndsWith?: InputMaybe<Scalars['Float']['input']>;
  iExact?: InputMaybe<Scalars['Float']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['Float']['input']>;
  inList?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  range?: InputMaybe<Array<Scalars['Float']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type FloorFilterInput = {
  AND?: InputMaybe<FloorFilterInput>;
  NOT?: InputMaybe<FloorFilterInput>;
  OR?: InputMaybe<FloorFilterInput>;
  building?: InputMaybe<BuildingFilterInput>;
  code?: InputMaybe<StrFilterLookup>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  description?: InputMaybe<StrFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StrFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  room?: InputMaybe<RoomFilterInput>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type FloorInput = {
  building: BuildingPartialInput;
  code: Scalars['String']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type FloorOrderInput = {
  building?: InputMaybe<BuildingOrderInput>;
  code?: InputMaybe<Ordering>;
  createdAt?: InputMaybe<Ordering>;
  description?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  room?: InputMaybe<RoomOrderInput>;
  updatedAt?: InputMaybe<Ordering>;
};

export type FloorPartialInput = {
  building?: InputMaybe<BuildingPartialInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloorType = {
  __typename?: 'FloorType';
  building: BuildingType;
  code: Scalars['String']['output'];
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  room?: Maybe<Array<RoomType>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FloorTypeRoomArgs = {
  filters?: InputMaybe<RoomFilterInput>;
  order?: InputMaybe<RoomOrderInput>;
};

export type FloorTypeMutation = {
  __typename?: 'FloorTypeMutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: FloorType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: FloorType;
};


export type FloorTypeMutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type FloorTypeMutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type FloorTypeMutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type FloorTypeMutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type FloorTypeMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type FloorTypeMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type FloorTypeMutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type FloorTypeMutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type FloorTypeMutationPartialSaveArgs = {
  data: FloorPartialInput;
};


export type FloorTypeMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type FloorTypeMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type FloorTypeMutationSaveArgs = {
  data: FloorInput;
};

export type FloorTypePageInfo = {
  __typename?: 'FloorTypePageInfo';
  data: Array<FloorType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type FtBaseStaffFilterInput = {
  AND?: InputMaybe<FtBaseStaffFilterInput>;
  NOT?: InputMaybe<FtBaseStaffFilterInput>;
  OR?: InputMaybe<FtBaseStaffFilterInput>;
  address?: InputMaybe<AddressFilterInput>;
  birthDate?: InputMaybe<DateFilterLookup>;
  contactInfo?: InputMaybe<ContactInfoFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  firstName?: InputMaybe<StrFilterLookup>;
  fullName?: InputMaybe<StrFilterLookup>;
  gender?: InputMaybe<StrFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<StrFilterLookup>;
  maidenName?: InputMaybe<StrFilterLookup>;
  middleName?: InputMaybe<StrFilterLookup>;
  nationalId?: InputMaybe<StrFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  service?: InputMaybe<ServiceFilterInput>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
  users?: InputMaybe<FtUserFilterInput>;
};

export type FtBaseStaffInput = {
  address?: InputMaybe<Scalars['Void']['input']>;
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  contactInfo?: InputMaybe<Scalars['Void']['input']>;
  firstName: Scalars['String']['input'];
  gender?: InputMaybe<GenderEnum>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  nationalId?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<FtUserPartialInput>>;
};

export type FtBaseStaffMutation = {
  __typename?: 'FtBaseStaffMutation';
  /** change current user password */
  changePassword: Scalars['Boolean']['output'];
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  partialSave: FtBaseStaffType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: FtBaseStaffType;
};


export type FtBaseStaffMutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type FtBaseStaffMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type FtBaseStaffMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type FtBaseStaffMutationPartialSaveArgs = {
  data: FtBaseStaffPartialInput;
};


export type FtBaseStaffMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type FtBaseStaffMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type FtBaseStaffMutationSaveArgs = {
  data: FtBaseStaffInput;
};

export type FtBaseStaffOrderInput = {
  address?: InputMaybe<AddressOrderInput>;
  birthDate?: InputMaybe<Ordering>;
  contactInfo?: InputMaybe<ContactInfoOrderInput>;
  createdAt?: InputMaybe<Ordering>;
  firstName?: InputMaybe<Ordering>;
  fullName?: InputMaybe<Ordering>;
  gender?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isActive?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  lastName?: InputMaybe<Ordering>;
  maidenName?: InputMaybe<Ordering>;
  middleName?: InputMaybe<Ordering>;
  nationalId?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  service?: InputMaybe<ServiceOrderInput>;
  updatedAt?: InputMaybe<Ordering>;
  users?: InputMaybe<FtUserOrderInput>;
};

export type FtBaseStaffPartialInput = {
  address?: InputMaybe<Scalars['Void']['input']>;
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  contactInfo?: InputMaybe<Scalars['Void']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderEnum>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  nationalId?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<FtUserPartialInput>>;
};

export type FtBaseStaffType = {
  __typename?: 'FtBaseStaffType';
  address?: Maybe<AddressType>;
  birthDate?: Maybe<Scalars['Date']['output']>;
  contactInfo?: Maybe<ContactInfoType>;
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  gender: GenderEnum;
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  maidenName: Scalars['String']['output'];
  middleName: Scalars['String']['output'];
  nationalId: Scalars['String']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  service?: Maybe<ServiceType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<Array<FtUserType>>;
};


export type FtBaseStaffTypeUsersArgs = {
  filters?: InputMaybe<FtUserFilterInput>;
  order?: InputMaybe<FtUserOrderInput>;
};

export type FtBaseStaffTypePageInfo = {
  __typename?: 'FtBaseStaffTypePageInfo';
  data: Array<FtBaseStaffType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type FtProfileFilterInput = {
  AND?: InputMaybe<FtProfileFilterInput>;
  NOT?: InputMaybe<FtProfileFilterInput>;
  OR?: InputMaybe<FtProfileFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  defaultUrl?: InputMaybe<StrFilterLookup>;
  description?: InputMaybe<StrFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isRoot?: InputMaybe<Scalars['Boolean']['input']>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StrFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  permissions?: InputMaybe<JsonFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type FtProfileInput = {
  defaultUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isRoot?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<Scalars['JSON']['input']>;
};

export type FtProfileMutation = {
  __typename?: 'FtProfileMutation';
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  partialSave: FtProfileType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: FtProfileType;
};


export type FtProfileMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type FtProfileMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type FtProfileMutationPartialSaveArgs = {
  data: FtProfilePartialInput;
};


export type FtProfileMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type FtProfileMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type FtProfileMutationSaveArgs = {
  data: FtProfileInput;
};

export type FtProfileOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  defaultUrl?: InputMaybe<Ordering>;
  description?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isRoot?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  permissions?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type FtProfilePartialInput = {
  defaultUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isRoot?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
};

export type FtProfileType = {
  __typename?: 'FtProfileType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  defaultUrl: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isRoot: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  permissions: Scalars['JSON']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FtProfileTypePageInfo = {
  __typename?: 'FtProfileTypePageInfo';
  data: Array<FtProfileType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type FtUserFilterInput = {
  AND?: InputMaybe<FtUserFilterInput>;
  NOT?: InputMaybe<FtUserFilterInput>;
  OR?: InputMaybe<FtUserFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  email?: InputMaybe<StrFilterLookup>;
  forceChangePassword?: InputMaybe<Scalars['Boolean']['input']>;
  ftbasestaff?: InputMaybe<FtBaseStaffFilterInput>;
  id?: InputMaybe<IdFilterLookup>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSpecial?: InputMaybe<Scalars['Boolean']['input']>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  keycloakUuid?: InputMaybe<UuidFilterLookup>;
  lastLoginAt?: InputMaybe<DatetimeFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  profile?: InputMaybe<FtProfileFilterInput>;
  realm?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
  username?: InputMaybe<StrFilterLookup>;
};

export type FtUserInput = {
  forceChangePassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSpecial?: InputMaybe<Scalars['Boolean']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  profile: FtProfilePartialInput;
  username: Scalars['String']['input'];
};

export type FtUserMutation = {
  __typename?: 'FtUserMutation';
  /** change current user password */
  changePassword: Scalars['Boolean']['output'];
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  partialSave: FtUserType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: FtUserType;
};


export type FtUserMutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type FtUserMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type FtUserMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type FtUserMutationPartialSaveArgs = {
  data: FtUserPartialInput;
};


export type FtUserMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type FtUserMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type FtUserMutationSaveArgs = {
  data: FtUserInput;
};

export type FtUserOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  email?: InputMaybe<Ordering>;
  forceChangePassword?: InputMaybe<Ordering>;
  ftbasestaff?: InputMaybe<FtBaseStaffOrderInput>;
  id?: InputMaybe<Ordering>;
  isActive?: InputMaybe<Ordering>;
  isSpecial?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  keycloakUuid?: InputMaybe<Ordering>;
  lastLoginAt?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  profile?: InputMaybe<FtProfileOrderInput>;
  realm?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
  username?: InputMaybe<Ordering>;
};

export type FtUserPartialInput = {
  forceChangePassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSpecial?: InputMaybe<Scalars['Boolean']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<FtProfilePartialInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type FtUserType = {
  __typename?: 'FtUserType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  email: Scalars['String']['output'];
  forceChangePassword: Scalars['Boolean']['output'];
  ftbasestaff?: Maybe<Array<FtBaseStaffType>>;
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSpecial: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  keycloakUuid: Scalars['UUID']['output'];
  lastLoginAt?: Maybe<Scalars['DateTime']['output']>;
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  profile?: Maybe<FtProfileType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};


export type FtUserTypeFtbasestaffArgs = {
  filters?: InputMaybe<FtBaseStaffFilterInput>;
  order?: InputMaybe<FtBaseStaffOrderInput>;
};

export type FtUserTypePageInfo = {
  __typename?: 'FtUserTypePageInfo';
  data: Array<FtUserType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export enum GenderEnum {
  Female = 'FEMALE',
  Intersex = 'INTERSEX',
  Male = 'MALE',
  Other = 'OTHER',
  Undefined = 'UNDEFINED'
}

export type IdFilterLookup = {
  contains?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  exact?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  iContains?: InputMaybe<Scalars['ID']['input']>;
  iEndsWith?: InputMaybe<Scalars['ID']['input']>;
  iExact?: InputMaybe<Scalars['ID']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['ID']['input']>;
  inList?: InputMaybe<Array<Scalars['ID']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  range?: InputMaybe<Array<Scalars['ID']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IngredientFilterInput = {
  AND?: InputMaybe<IngredientFilterInput>;
  NOT?: InputMaybe<IngredientFilterInput>;
  OR?: InputMaybe<IngredientFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  ingredientrecipe?: InputMaybe<IngredientRecipeFilterInput>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StrFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  price?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  supplier?: InputMaybe<StrFilterLookup>;
  unitPrice?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type IngredientInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  supplier: Scalars['String']['input'];
  unitPrice: Scalars['String']['input'];
};

export type IngredientMutation = {
  __typename?: 'IngredientMutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: IngredientType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: IngredientType;
};


export type IngredientMutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type IngredientMutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type IngredientMutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type IngredientMutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type IngredientMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type IngredientMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type IngredientMutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type IngredientMutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type IngredientMutationPartialSaveArgs = {
  data: IngredientPartialInput;
};


export type IngredientMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type IngredientMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type IngredientMutationSaveArgs = {
  data: IngredientInput;
};

export type IngredientOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  ingredientrecipe?: InputMaybe<IngredientRecipeOrderInput>;
  isCanceled?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  price?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  supplier?: InputMaybe<Ordering>;
  unitPrice?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type IngredientPartialInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  supplier?: InputMaybe<Scalars['String']['input']>;
  unitPrice?: InputMaybe<Scalars['String']['input']>;
};

export type IngredientRecipeFilterInput = {
  AND?: InputMaybe<IngredientRecipeFilterInput>;
  NOT?: InputMaybe<IngredientRecipeFilterInput>;
  OR?: InputMaybe<IngredientRecipeFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  ingredient?: InputMaybe<IngredientFilterInput>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  quantity?: InputMaybe<FloatFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  recipe?: InputMaybe<RecipeFilterInput>;
  unit?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type IngredientRecipeInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredient: IngredientPartialInput;
  quantity: Scalars['Float']['input'];
  unit: Scalars['String']['input'];
};

export type IngredientRecipeMutation = {
  __typename?: 'IngredientRecipeMutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: IngredientRecipeType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: IngredientRecipeType;
};


export type IngredientRecipeMutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type IngredientRecipeMutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type IngredientRecipeMutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type IngredientRecipeMutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type IngredientRecipeMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type IngredientRecipeMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type IngredientRecipeMutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type IngredientRecipeMutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type IngredientRecipeMutationPartialSaveArgs = {
  data: IngredientRecipePartialInput;
};


export type IngredientRecipeMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type IngredientRecipeMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type IngredientRecipeMutationSaveArgs = {
  data: IngredientRecipeInput;
};

export type IngredientRecipeOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  ingredient?: InputMaybe<IngredientOrderInput>;
  isSystem?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  quantity?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  recipe?: InputMaybe<RecipeOrderInput>;
  unit?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type IngredientRecipePartialInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredient?: InputMaybe<IngredientPartialInput>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

export type IngredientRecipeType = {
  __typename?: 'IngredientRecipeType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  ingredient?: IngredientType;
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  quantity: Scalars['Float']['output'];
  recipe: RecipeType;
  unit: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IngredientRecipeTypePageInfo = {
  __typename?: 'IngredientRecipeTypePageInfo';
  data: Array<IngredientRecipeType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type IngredientType = {
  __typename?: 'IngredientType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  ingredientrecipe?: Maybe<Array<IngredientRecipeType>>;
  isCanceled: Scalars['Boolean']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Int']['output'];
  supplier: Scalars['String']['output'];
  unitPrice: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type IngredientTypeIngredientrecipeArgs = {
  filters?: InputMaybe<IngredientRecipeFilterInput>;
  order?: InputMaybe<IngredientRecipeOrderInput>;
};

export type IngredientTypePageInfo = {
  __typename?: 'IngredientTypePageInfo';
  data: Array<IngredientType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type IntFilterLookup = {
  contains?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  exact?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  iContains?: InputMaybe<Scalars['Int']['input']>;
  iEndsWith?: InputMaybe<Scalars['Int']['input']>;
  iExact?: InputMaybe<Scalars['Int']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['Int']['input']>;
  inList?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  range?: InputMaybe<Array<Scalars['Int']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterLookup = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  exact?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  iContains?: InputMaybe<Scalars['JSON']['input']>;
  iEndsWith?: InputMaybe<Scalars['JSON']['input']>;
  iExact?: InputMaybe<Scalars['JSON']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['JSON']['input']>;
  inList?: InputMaybe<Array<Scalars['JSON']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  range?: InputMaybe<Array<Scalars['JSON']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type MealFilterInput = {
  AND?: InputMaybe<MealFilterInput>;
  NOT?: InputMaybe<MealFilterInput>;
  OR?: InputMaybe<MealFilterInput>;
  availability?: InputMaybe<StrFilterLookup>;
  belief?: InputMaybe<StrFilterLookup>;
  calorie?: InputMaybe<IntFilterLookup>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  diet?: InputMaybe<DietFilterInput>;
  id?: InputMaybe<IdFilterLookup>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<StrFilterLookup>;
  menus?: InputMaybe<MenuFilterInput>;
  orders?: InputMaybe<OrderFilterInput>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  photo?: InputMaybe<StrFilterLookup>;
  price?: InputMaybe<FloatFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  supplement?: InputMaybe<StrFilterLookup>;
  type?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type MealInput = {
  availability?: InputMaybe<Scalars['String']['input']>;
  belief?: InputMaybe<Scalars['String']['input']>;
  calorie?: InputMaybe<Scalars['Int']['input']>;
  diet?: InputMaybe<DietPartialInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  label: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  supplement?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type MealOrderInput = {
  availability?: InputMaybe<Ordering>;
  belief?: InputMaybe<Ordering>;
  calorie?: InputMaybe<Ordering>;
  createdAt?: InputMaybe<Ordering>;
  diet?: InputMaybe<DietOrderInput>;
  id?: InputMaybe<Ordering>;
  isCanceled?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  label?: InputMaybe<Ordering>;
  menus?: InputMaybe<MenuOrderInput>;
  orders?: InputMaybe<OrderOrderInput>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  photo?: InputMaybe<Ordering>;
  price?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  supplement?: InputMaybe<Ordering>;
  type?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type MealPartialInput = {
  availability?: InputMaybe<Scalars['String']['input']>;
  belief?: InputMaybe<Scalars['String']['input']>;
  calorie?: InputMaybe<Scalars['Int']['input']>;
  diet?: InputMaybe<DietPartialInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  supplement?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type MealType = {
  __typename?: 'MealType';
  availability?: Maybe<Scalars['String']['output']>;
  belief?: Maybe<Scalars['String']['output']>;
  calorie?: Maybe<Scalars['Int']['output']>;
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  diet: DietType;
  id: Scalars['Int']['output'];
  isCanceled: Scalars['Boolean']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  menus?: Maybe<Array<MenuType>>;
  orders?: Maybe<Array<OrderType>>;
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  photo: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  supplement?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MealTypeMenusArgs = {
  filters?: InputMaybe<MenuFilterInput>;
  order?: InputMaybe<MenuOrderInput>;
};


export type MealTypeOrdersArgs = {
  filters?: InputMaybe<OrderFilterInput>;
  order?: InputMaybe<OrderOrderInput>;
};

export type MealTypeMutation = {
  __typename?: 'MealTypeMutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: MealType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: MealType;
};


export type MealTypeMutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type MealTypeMutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type MealTypeMutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type MealTypeMutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type MealTypeMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type MealTypeMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type MealTypeMutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type MealTypeMutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type MealTypeMutationPartialSaveArgs = {
  data: MealPartialInput;
};


export type MealTypeMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type MealTypeMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type MealTypeMutationSaveArgs = {
  data: MealInput;
};

export type MealTypePageInfo = {
  __typename?: 'MealTypePageInfo';
  data: Array<MealType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type MenuFilterInput = {
  AND?: InputMaybe<MenuFilterInput>;
  NOT?: InputMaybe<MenuFilterInput>;
  OR?: InputMaybe<MenuFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  meal?: InputMaybe<MealFilterInput>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  title?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type MenuInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  meal: Array<MealPartialInput>;
  title: Scalars['String']['input'];
};

export type MenuMutation = {
  __typename?: 'MenuMutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: MenuType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: MenuType;
};


export type MenuMutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type MenuMutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type MenuMutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type MenuMutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type MenuMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type MenuMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type MenuMutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type MenuMutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type MenuMutationPartialSaveArgs = {
  data: MenuPartialInput;
};


export type MenuMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type MenuMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type MenuMutationSaveArgs = {
  data: MenuInput;
};

export type MenuOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isCanceled?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  meal?: InputMaybe<MealOrderInput>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  title?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type MenuPartialInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  meal?: InputMaybe<Array<MealPartialInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MenuType = {
  __typename?: 'MenuType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isCanceled: Scalars['Boolean']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  meal: Array<MealType>;
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MenuTypeMealArgs = {
  filters?: InputMaybe<MealFilterInput>;
  order?: InputMaybe<MealOrderInput>;
};

export type MenuTypePageInfo = {
  __typename?: 'MenuTypePageInfo';
  data: Array<MenuType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  appConfigMutation?: Maybe<AppConfigMutation>;
  authenticator?: Maybe<Authenticator>;
  bedTypeMutation?: Maybe<BedTypeTypeMutation>;
  buildingMutation?: Maybe<BuildingTypeMutation>;
  defaultValuesMutation?: Maybe<DefaultValuesConfigMutation>;
  departmentMutation?: Maybe<DepartmentMutation>;
  dietMutation?: Maybe<DietTypeMutation>;
  floorMutation?: Maybe<FloorTypeMutation>;
  ingredientMutation?: Maybe<IngredientMutation>;
  ingredientRecipeMutation?: Maybe<IngredientRecipeMutation>;
  mealMutation?: Maybe<MealTypeMutation>;
  menuMutation?: Maybe<MenuMutation>;
  orderMutation?: Maybe<OrderTypeMutation>;
  profileMutation?: Maybe<FtProfileMutation>;
  recipeMutation?: Maybe<RecipeMutation>;
  roomMutation?: Maybe<RoomTypeMutation>;
  roomTypeMutation?: Maybe<RoomTypeTypemutation>;
  serviceMutation?: Maybe<ServiceMutation>;
  siteGroupMutation?: Maybe<SiteGroupMutation>;
  siteMutation?: Maybe<SiteMutation>;
  sousRecipeMutation?: Maybe<SousRecipeMutation>;
  staffMutation?: Maybe<FtBaseStaffMutation>;
  userDefinedConfigMutation?: Maybe<UserDefinedConfigMutation>;
  userMutation?: Maybe<FtUserMutation>;
  wardMutation?: Maybe<WardTypeMutation>;
};

export type MutationSuccessType = {
  __typename?: 'MutationSuccessType';
  changedItemsCount: Scalars['Int']['output'];
  error?: Maybe<Scalars['String']['output']>;
  method: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type OrderFilterInput = {
  AND?: InputMaybe<OrderFilterInput>;
  NOT?: InputMaybe<OrderFilterInput>;
  OR?: InputMaybe<OrderFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  date?: InputMaybe<DateFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  meal?: InputMaybe<MealFilterInput>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  patient?: InputMaybe<StrFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  status?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type OrderInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isCanceled: Scalars['Boolean']['input'];
  meal: Array<MealPartialInput>;
  patient: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

export type OrderOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  date?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isCanceled?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  meal?: InputMaybe<MealOrderInput>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  patient?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  status?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type OrderPartialInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  meal?: InputMaybe<Array<MealPartialInput>>;
  patient?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type OrderType = {
  __typename?: 'OrderType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isCanceled: Scalars['Boolean']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  meal: Array<MealType>;
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  patient: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrderTypeMealArgs = {
  filters?: InputMaybe<MealFilterInput>;
  order?: InputMaybe<MealOrderInput>;
};

export type OrderTypeMutation = {
  __typename?: 'OrderTypeMutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: OrderType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: OrderType;
};


export type OrderTypeMutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type OrderTypeMutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type OrderTypeMutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type OrderTypeMutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type OrderTypeMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type OrderTypeMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type OrderTypeMutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type OrderTypeMutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type OrderTypeMutationPartialSaveArgs = {
  data: OrderPartialInput;
};


export type OrderTypeMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type OrderTypeMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type OrderTypeMutationSaveArgs = {
  data: OrderInput;
};

export type OrderTypePageInfo = {
  __typename?: 'OrderTypePageInfo';
  data: Array<OrderType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export enum Ordering {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PaginatorInput = {
  page: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  accessLevels: Array<AccessLevel>;
  appConfig?: Maybe<Scalars['JSON']['output']>;
  bedType: BedTypeType;
  bedTypeList: Array<BedTypeType>;
  bedTypePaginator: BedTypeTypePageInfo;
  building: BuildingType;
  buildingList: Array<BuildingType>;
  buildingPaginator: BuildingTypePageInfo;
  city: CityType;
  cityList: Array<CityType>;
  cityPaginator: CityTypePageInfo;
  country: CountryType;
  countryList: Array<CountryType>;
  countryPaginator: CountryTypePageInfo;
  defaultValues?: Maybe<Scalars['JSON']['output']>;
  department: DepartmentType;
  departmentList: Array<DepartmentType>;
  departmentPaginator: DepartmentTypePageInfo;
  diet: DietType;
  dietList: Array<DietType>;
  dietPaginator: DietTypePageInfo;
  echo?: Maybe<Scalars['String']['output']>;
  floor: FloorType;
  floorList: Array<FloorType>;
  floorPaginator: FloorTypePageInfo;
  ingredient: IngredientType;
  ingredientList: Array<IngredientType>;
  ingredientPaginator: IngredientTypePageInfo;
  ingredientRecipe: IngredientRecipeType;
  ingredientRecipeList: Array<IngredientRecipeType>;
  ingredientRecipePaginator: IngredientRecipeTypePageInfo;
  meal: MealType;
  mealList: Array<MealType>;
  mealPaginator: MealTypePageInfo;
  menu: MenuType;
  menuList: Array<MenuType>;
  menuPaginator: MenuTypePageInfo;
  order: OrderType;
  orderList: Array<OrderType>;
  orderPaginator: OrderTypePageInfo;
  profile: FtProfileType;
  profileList: Array<FtProfileType>;
  profilePaginator: FtProfileTypePageInfo;
  recipe: RecipeType;
  recipeList: Array<RecipeType>;
  recipePaginator: RecipeTypePageInfo;
  resources: Array<Resource>;
  room: RoomType;
  roomList: Array<RoomType>;
  roomPaginator: RoomTypePageInfo;
  roomType: RoomTypeType;
  roomTypeList: Array<RoomTypeType>;
  roomTypePaginator: RoomTypeTypePageInfo;
  securedEcho?: Maybe<Scalars['String']['output']>;
  service: ServiceType;
  serviceList: Array<ServiceType>;
  servicePaginator: ServiceTypePageInfo;
  site: SiteType;
  siteGroup: SiteGroupType;
  siteGroupList: Array<SiteGroupType>;
  siteGroupPaginator: SiteGroupTypePageInfo;
  siteList: Array<SiteType>;
  sitePaginator: SiteTypePageInfo;
  sousRecipe: SousRecipeType;
  sousRecipeList: Array<SousRecipeType>;
  sousRecipePaginator: SousRecipeTypePageInfo;
  staff: FtBaseStaffType;
  staffList: Array<FtBaseStaffType>;
  staffPaginator: FtBaseStaffTypePageInfo;
  system: SystemType;
  user: FtUserType;
  userDefinedConfig?: Maybe<Scalars['JSON']['output']>;
  userList: Array<FtUserType>;
  userPaginator: FtUserTypePageInfo;
  ward: WardType;
  wardList: Array<WardType>;
  wardPaginator: WardTypePageInfo;
};


export type QueryAppConfigArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryBedTypeArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryBedTypeListArgs = {
  filters?: InputMaybe<BedTypeFilterInput>;
  order?: InputMaybe<BedTypeOrderInput>;
};


export type QueryBedTypePaginatorArgs = {
  filters?: InputMaybe<BedTypeFilterInput>;
  order?: InputMaybe<BedTypeOrderInput>;
  paginator: PaginatorInput;
};


export type QueryBuildingArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryBuildingListArgs = {
  filters?: InputMaybe<BuildingFilterInput>;
  order?: InputMaybe<BuildingOrderInput>;
};


export type QueryBuildingPaginatorArgs = {
  filters?: InputMaybe<BuildingFilterInput>;
  order?: InputMaybe<BuildingOrderInput>;
  paginator: PaginatorInput;
};


export type QueryCityArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryCityListArgs = {
  filters?: InputMaybe<CityFilterInput>;
  order?: InputMaybe<CityOrderInput>;
};


export type QueryCityPaginatorArgs = {
  filters?: InputMaybe<CityFilterInput>;
  order?: InputMaybe<CityOrderInput>;
  paginator: PaginatorInput;
};


export type QueryCountryArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryCountryListArgs = {
  filters?: InputMaybe<CountryFilterInput>;
  order?: InputMaybe<CountryOrderInput>;
};


export type QueryCountryPaginatorArgs = {
  filters?: InputMaybe<CountryFilterInput>;
  order?: InputMaybe<CountryOrderInput>;
  paginator: PaginatorInput;
};


export type QueryDefaultValuesArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
  mine?: Scalars['Boolean']['input'];
  ownerId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDepartmentArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryDepartmentListArgs = {
  filters?: InputMaybe<DepartmentFilterInput>;
  order?: InputMaybe<DepartmentOrderInput>;
};


export type QueryDepartmentPaginatorArgs = {
  filters?: InputMaybe<DepartmentFilterInput>;
  order?: InputMaybe<DepartmentOrderInput>;
  paginator: PaginatorInput;
};


export type QueryDietArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryDietListArgs = {
  filters?: InputMaybe<DietFilterInput>;
  order?: InputMaybe<DietOrderInput>;
};


export type QueryDietPaginatorArgs = {
  filters?: InputMaybe<DietFilterInput>;
  order?: InputMaybe<DietOrderInput>;
  paginator: PaginatorInput;
};


export type QueryEchoArgs = {
  value?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFloorArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryFloorListArgs = {
  filters?: InputMaybe<FloorFilterInput>;
  order?: InputMaybe<FloorOrderInput>;
};


export type QueryFloorPaginatorArgs = {
  filters?: InputMaybe<FloorFilterInput>;
  order?: InputMaybe<FloorOrderInput>;
  paginator: PaginatorInput;
};


export type QueryIngredientArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryIngredientListArgs = {
  filters?: InputMaybe<IngredientFilterInput>;
  order?: InputMaybe<IngredientOrderInput>;
};


export type QueryIngredientPaginatorArgs = {
  filters?: InputMaybe<IngredientFilterInput>;
  order?: InputMaybe<IngredientOrderInput>;
  paginator: PaginatorInput;
};


export type QueryIngredientRecipeArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryIngredientRecipeListArgs = {
  filters?: InputMaybe<IngredientRecipeFilterInput>;
  order?: InputMaybe<IngredientRecipeOrderInput>;
};


export type QueryIngredientRecipePaginatorArgs = {
  filters?: InputMaybe<IngredientRecipeFilterInput>;
  order?: InputMaybe<IngredientRecipeOrderInput>;
  paginator: PaginatorInput;
};


export type QueryMealArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryMealListArgs = {
  filters?: InputMaybe<MealFilterInput>;
  order?: InputMaybe<MealOrderInput>;
};


export type QueryMealPaginatorArgs = {
  filters?: InputMaybe<MealFilterInput>;
  order?: InputMaybe<MealOrderInput>;
  paginator: PaginatorInput;
};


export type QueryMenuArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryMenuListArgs = {
  filters?: InputMaybe<MenuFilterInput>;
  order?: InputMaybe<MenuOrderInput>;
};


export type QueryMenuPaginatorArgs = {
  filters?: InputMaybe<MenuFilterInput>;
  order?: InputMaybe<MenuOrderInput>;
  paginator: PaginatorInput;
};


export type QueryOrderArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryOrderListArgs = {
  filters?: InputMaybe<OrderFilterInput>;
  order?: InputMaybe<OrderOrderInput>;
};


export type QueryOrderPaginatorArgs = {
  filters?: InputMaybe<OrderFilterInput>;
  order?: InputMaybe<OrderOrderInput>;
  paginator: PaginatorInput;
};


export type QueryProfileArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryProfileListArgs = {
  filters?: InputMaybe<FtProfileFilterInput>;
  order?: InputMaybe<FtProfileOrderInput>;
};


export type QueryProfilePaginatorArgs = {
  filters?: InputMaybe<FtProfileFilterInput>;
  order?: InputMaybe<FtProfileOrderInput>;
  paginator: PaginatorInput;
};


export type QueryRecipeArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryRecipeListArgs = {
  filters?: InputMaybe<RecipeFilterInput>;
  order?: InputMaybe<RecipeOrderInput>;
};


export type QueryRecipePaginatorArgs = {
  filters?: InputMaybe<RecipeFilterInput>;
  order?: InputMaybe<RecipeOrderInput>;
  paginator: PaginatorInput;
};


export type QueryResourcesArgs = {
  name?: InputMaybe<StrFilterLookup>;
};


export type QueryRoomArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryRoomListArgs = {
  filters?: InputMaybe<RoomFilterInput>;
  order?: InputMaybe<RoomOrderInput>;
};


export type QueryRoomPaginatorArgs = {
  filters?: InputMaybe<RoomFilterInput>;
  order?: InputMaybe<RoomOrderInput>;
  paginator: PaginatorInput;
};


export type QueryRoomTypeArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryRoomTypeListArgs = {
  filters?: InputMaybe<RoomTypeFilterInput>;
  order?: InputMaybe<RoomTypeOrderInput>;
};


export type QueryRoomTypePaginatorArgs = {
  filters?: InputMaybe<RoomTypeFilterInput>;
  order?: InputMaybe<RoomTypeOrderInput>;
  paginator: PaginatorInput;
};


export type QuerySecuredEchoArgs = {
  value?: InputMaybe<Scalars['String']['input']>;
};


export type QueryServiceArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryServiceListArgs = {
  filters?: InputMaybe<ServiceFilterInput>;
  order?: InputMaybe<ServiceOrderInput>;
};


export type QueryServicePaginatorArgs = {
  filters?: InputMaybe<ServiceFilterInput>;
  order?: InputMaybe<ServiceOrderInput>;
  paginator: PaginatorInput;
};


export type QuerySiteArgs = {
  pk: Scalars['ID']['input'];
};


export type QuerySiteGroupArgs = {
  pk: Scalars['ID']['input'];
};


export type QuerySiteGroupListArgs = {
  filters?: InputMaybe<SiteGroupFilterInput>;
  order?: InputMaybe<SiteGroupOrderInput>;
};


export type QuerySiteGroupPaginatorArgs = {
  filters?: InputMaybe<SiteGroupFilterInput>;
  order?: InputMaybe<SiteGroupOrderInput>;
  paginator: PaginatorInput;
};


export type QuerySiteListArgs = {
  filters?: InputMaybe<SiteFilterInput>;
  order?: InputMaybe<SiteOrderInput>;
};


export type QuerySitePaginatorArgs = {
  filters?: InputMaybe<SiteFilterInput>;
  order?: InputMaybe<SiteOrderInput>;
  paginator: PaginatorInput;
};


export type QuerySousRecipeArgs = {
  pk: Scalars['ID']['input'];
};


export type QuerySousRecipeListArgs = {
  filters?: InputMaybe<SousRecipeFilterInput>;
  order?: InputMaybe<SousRecipeOrderInput>;
};


export type QuerySousRecipePaginatorArgs = {
  filters?: InputMaybe<SousRecipeFilterInput>;
  order?: InputMaybe<SousRecipeOrderInput>;
  paginator: PaginatorInput;
};


export type QueryStaffArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryStaffListArgs = {
  filters?: InputMaybe<FtBaseStaffFilterInput>;
  order?: InputMaybe<FtBaseStaffOrderInput>;
};


export type QueryStaffPaginatorArgs = {
  filters?: InputMaybe<FtBaseStaffFilterInput>;
  order?: InputMaybe<FtBaseStaffOrderInput>;
  paginator: PaginatorInput;
};


export type QueryUserArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryUserDefinedConfigArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
  mine?: Scalars['Boolean']['input'];
  ownerId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserListArgs = {
  filters?: InputMaybe<FtUserFilterInput>;
  order?: InputMaybe<FtUserOrderInput>;
};


export type QueryUserPaginatorArgs = {
  filters?: InputMaybe<FtUserFilterInput>;
  order?: InputMaybe<FtUserOrderInput>;
  paginator: PaginatorInput;
};


export type QueryWardArgs = {
  pk: Scalars['ID']['input'];
};


export type QueryWardListArgs = {
  filters?: InputMaybe<WardFilterInput>;
  order?: InputMaybe<WardOrderInput>;
};


export type QueryWardPaginatorArgs = {
  filters?: InputMaybe<WardFilterInput>;
  order?: InputMaybe<WardOrderInput>;
  paginator: PaginatorInput;
};

export type RecipeFilterInput = {
  AND?: InputMaybe<RecipeFilterInput>;
  NOT?: InputMaybe<RecipeFilterInput>;
  OR?: InputMaybe<RecipeFilterInput>;
  category?: InputMaybe<StrFilterLookup>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  ingredientRecipes?: InputMaybe<IngredientRecipeFilterInput>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StrFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  productionValue?: InputMaybe<FloatFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  sousRecipes?: InputMaybe<SousRecipeFilterInput>;
  unitProductionValue?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type RecipeInput = {
  category: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredientRecipes?: InputMaybe<Array<IngredientRecipePartialInput>>;
  isCanceled: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  productionValue?: InputMaybe<Scalars['Float']['input']>;
  sousRecipes?: InputMaybe<Array<SousRecipePartialInput>>;
  unitProductionValue?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeMutation = {
  __typename?: 'RecipeMutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: RecipeType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: RecipeType;
};


export type RecipeMutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type RecipeMutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RecipeMutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type RecipeMutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RecipeMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type RecipeMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RecipeMutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type RecipeMutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RecipeMutationPartialSaveArgs = {
  data: RecipePartialInput;
};


export type RecipeMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type RecipeMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RecipeMutationSaveArgs = {
  data: RecipeInput;
};

export type RecipeOrderInput = {
  category?: InputMaybe<Ordering>;
  createdAt?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  ingredientRecipes?: InputMaybe<IngredientRecipeOrderInput>;
  isCanceled?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  productionValue?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  sousRecipes?: InputMaybe<SousRecipeOrderInput>;
  unitProductionValue?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type RecipePartialInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredientRecipes?: InputMaybe<Array<IngredientRecipePartialInput>>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productionValue?: InputMaybe<Scalars['Float']['input']>;
  sousRecipes?: InputMaybe<Array<SousRecipePartialInput>>;
  unitProductionValue?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeType = {
  __typename?: 'RecipeType';
  category: Scalars['String']['output'];
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  ingredientRecipes?: Maybe<Array<IngredientRecipeType>>;
  isCanceled: Scalars['Boolean']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  productionValue?: Maybe<Scalars['Float']['output']>;
  sousRecipes?: Maybe<Array<SousRecipeType>>;
  unitProductionValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type RecipeTypeIngredientRecipesArgs = {
  filters?: InputMaybe<IngredientRecipeFilterInput>;
  order?: InputMaybe<IngredientRecipeOrderInput>;
};


export type RecipeTypeSousRecipesArgs = {
  filters?: InputMaybe<SousRecipeFilterInput>;
  order?: InputMaybe<SousRecipeOrderInput>;
};

export type RecipeTypePageInfo = {
  __typename?: 'RecipeTypePageInfo';
  data: Array<RecipeType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type Resource = {
  __typename?: 'Resource';
  actions?: Maybe<Array<Action>>;
  hint?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  translate?: Maybe<Scalars['String']['output']>;
};

export type RoomFilterInput = {
  AND?: InputMaybe<RoomFilterInput>;
  NOT?: InputMaybe<RoomFilterInput>;
  OR?: InputMaybe<RoomFilterInput>;
  bedCode?: InputMaybe<StrFilterLookup>;
  bedCpt?: InputMaybe<IntFilterLookup>;
  bedName?: InputMaybe<StrFilterLookup>;
  bedStatus?: InputMaybe<StrFilterLookup>;
  bedType?: InputMaybe<BedTypeFilterInput>;
  code?: InputMaybe<StrFilterLookup>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  floor?: InputMaybe<FloorFilterInput>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<StrFilterLookup>;
  options?: InputMaybe<JsonFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  roomType?: InputMaybe<RoomTypeFilterInput>;
  status?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
  ward?: InputMaybe<WardFilterInput>;
};

export type RoomInput = {
  bedCode: Scalars['String']['input'];
  bedCpt: Scalars['Int']['input'];
  bedName?: InputMaybe<Scalars['String']['input']>;
  bedStatus?: InputMaybe<Scalars['String']['input']>;
  bedType: BedTypePartialInput;
  code: Scalars['String']['input'];
  floor: FloorPartialInput;
  id?: InputMaybe<Scalars['Int']['input']>;
  label: Scalars['String']['input'];
  options?: InputMaybe<Scalars['JSON']['input']>;
  roomType: RoomTypePartialInput;
  status?: InputMaybe<Scalars['String']['input']>;
  ward: WardPartialInput;
};

export type RoomOrderInput = {
  bedCode?: InputMaybe<Ordering>;
  bedCpt?: InputMaybe<Ordering>;
  bedName?: InputMaybe<Ordering>;
  bedStatus?: InputMaybe<Ordering>;
  bedType?: InputMaybe<BedTypeOrderInput>;
  code?: InputMaybe<Ordering>;
  createdAt?: InputMaybe<Ordering>;
  floor?: InputMaybe<FloorOrderInput>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  label?: InputMaybe<Ordering>;
  options?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  roomType?: InputMaybe<RoomTypeOrderInput>;
  status?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
  ward?: InputMaybe<WardOrderInput>;
};

export type RoomPartialInput = {
  bedCode?: InputMaybe<Scalars['String']['input']>;
  bedCpt?: InputMaybe<Scalars['Int']['input']>;
  bedName?: InputMaybe<Scalars['String']['input']>;
  bedStatus?: InputMaybe<Scalars['String']['input']>;
  bedType?: InputMaybe<BedTypePartialInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<FloorPartialInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  roomType?: InputMaybe<RoomTypePartialInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  ward?: InputMaybe<WardPartialInput>;
};

export type RoomType = {
  __typename?: 'RoomType';
  bedCode: Scalars['String']['output'];
  bedCpt: Scalars['Int']['output'];
  bedName: Scalars['String']['output'];
  bedStatus?: Maybe<Scalars['String']['output']>;
  bedType: BedTypeType;
  code: Scalars['String']['output'];
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  floor: FloorType;
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  options: Scalars['JSON']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  roomType: RoomTypeType;
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  ward: WardType;
};

export type RoomTypeFilterInput = {
  AND?: InputMaybe<RoomTypeFilterInput>;
  NOT?: InputMaybe<RoomTypeFilterInput>;
  OR?: InputMaybe<RoomTypeFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  room?: InputMaybe<RoomFilterInput>;
  type?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type RoomTypeInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};

export type RoomTypeMutation = {
  __typename?: 'RoomTypeMutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: RoomType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: RoomType;
};


export type RoomTypeMutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type RoomTypeMutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RoomTypeMutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type RoomTypeMutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RoomTypeMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type RoomTypeMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RoomTypeMutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type RoomTypeMutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RoomTypeMutationPartialSaveArgs = {
  data: RoomPartialInput;
};


export type RoomTypeMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type RoomTypeMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RoomTypeMutationSaveArgs = {
  data: RoomInput;
};

export type RoomTypeOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  room?: InputMaybe<RoomOrderInput>;
  type?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type RoomTypePageInfo = {
  __typename?: 'RoomTypePageInfo';
  data: Array<RoomType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type RoomTypePartialInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type RoomTypeType = {
  __typename?: 'RoomTypeType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  room?: Maybe<Array<RoomType>>;
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type RoomTypeTypeRoomArgs = {
  filters?: InputMaybe<RoomFilterInput>;
  order?: InputMaybe<RoomOrderInput>;
};

export type RoomTypeTypePageInfo = {
  __typename?: 'RoomTypeTypePageInfo';
  data: Array<RoomTypeType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type RoomTypeTypemutation = {
  __typename?: 'RoomTypeTypemutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: RoomTypeType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: RoomTypeType;
};


export type RoomTypeTypemutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type RoomTypeTypemutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RoomTypeTypemutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type RoomTypeTypemutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RoomTypeTypemutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type RoomTypeTypemutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RoomTypeTypemutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type RoomTypeTypemutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RoomTypeTypemutationPartialSaveArgs = {
  data: RoomTypePartialInput;
};


export type RoomTypeTypemutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type RoomTypeTypemutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type RoomTypeTypemutationSaveArgs = {
  data: RoomTypeInput;
};

export type ServiceFilterInput = {
  AND?: InputMaybe<ServiceFilterInput>;
  NOT?: InputMaybe<ServiceFilterInput>;
  OR?: InputMaybe<ServiceFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  department?: InputMaybe<DepartmentFilterInput>;
  ftbasestaff?: InputMaybe<FtBaseStaffFilterInput>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StrFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type ServiceInput = {
  department?: InputMaybe<DepartmentPartialInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type ServiceMutation = {
  __typename?: 'ServiceMutation';
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  partialSave: ServiceType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: ServiceType;
};


export type ServiceMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type ServiceMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type ServiceMutationPartialSaveArgs = {
  data: ServicePartialInput;
};


export type ServiceMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type ServiceMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type ServiceMutationSaveArgs = {
  data: ServiceInput;
};

export type ServiceOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  department?: InputMaybe<DepartmentOrderInput>;
  ftbasestaff?: InputMaybe<FtBaseStaffOrderInput>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type ServicePartialInput = {
  department?: InputMaybe<DepartmentPartialInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceType = {
  __typename?: 'ServiceType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  department?: Maybe<DepartmentType>;
  ftbasestaff?: Maybe<Array<FtBaseStaffType>>;
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ServiceTypeFtbasestaffArgs = {
  filters?: InputMaybe<FtBaseStaffFilterInput>;
  order?: InputMaybe<FtBaseStaffOrderInput>;
};

export type ServiceTypePageInfo = {
  __typename?: 'ServiceTypePageInfo';
  data: Array<ServiceType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type SiteFilterInput = {
  AND?: InputMaybe<SiteFilterInput>;
  NOT?: InputMaybe<SiteFilterInput>;
  OR?: InputMaybe<SiteFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  department?: InputMaybe<DepartmentFilterInput>;
  group?: InputMaybe<SiteGroupFilterInput>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StrFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type SiteGroupFilterInput = {
  AND?: InputMaybe<SiteGroupFilterInput>;
  NOT?: InputMaybe<SiteGroupFilterInput>;
  OR?: InputMaybe<SiteGroupFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StrFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  site?: InputMaybe<SiteFilterInput>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type SiteGroupInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type SiteGroupMutation = {
  __typename?: 'SiteGroupMutation';
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  partialSave: SiteGroupType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: SiteGroupType;
};


export type SiteGroupMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type SiteGroupMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type SiteGroupMutationPartialSaveArgs = {
  data: SiteGroupPartialInput;
};


export type SiteGroupMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type SiteGroupMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type SiteGroupMutationSaveArgs = {
  data: SiteGroupInput;
};

export type SiteGroupOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  site?: InputMaybe<SiteOrderInput>;
  updatedAt?: InputMaybe<Ordering>;
};

export type SiteGroupPartialInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SiteGroupType = {
  __typename?: 'SiteGroupType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  site?: Maybe<Array<SiteType>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SiteGroupTypeSiteArgs = {
  filters?: InputMaybe<SiteFilterInput>;
  order?: InputMaybe<SiteOrderInput>;
};

export type SiteGroupTypePageInfo = {
  __typename?: 'SiteGroupTypePageInfo';
  data: Array<SiteGroupType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type SiteInput = {
  group?: InputMaybe<SiteGroupPartialInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type SiteMutation = {
  __typename?: 'SiteMutation';
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  partialSave: SiteType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: SiteType;
};


export type SiteMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type SiteMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type SiteMutationPartialSaveArgs = {
  data: SitePartialInput;
};


export type SiteMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type SiteMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type SiteMutationSaveArgs = {
  data: SiteInput;
};

export type SiteOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  department?: InputMaybe<DepartmentOrderInput>;
  group?: InputMaybe<SiteGroupOrderInput>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type SitePartialInput = {
  group?: InputMaybe<SiteGroupPartialInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SiteType = {
  __typename?: 'SiteType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  department?: Maybe<Array<DepartmentType>>;
  group?: Maybe<SiteGroupType>;
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SiteTypeDepartmentArgs = {
  filters?: InputMaybe<DepartmentFilterInput>;
  order?: InputMaybe<DepartmentOrderInput>;
};

export type SiteTypePageInfo = {
  __typename?: 'SiteTypePageInfo';
  data: Array<SiteType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type SousRecipeFilterInput = {
  AND?: InputMaybe<SousRecipeFilterInput>;
  NOT?: InputMaybe<SousRecipeFilterInput>;
  OR?: InputMaybe<SousRecipeFilterInput>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StrFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  productionValue?: InputMaybe<FloatFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  recipe?: InputMaybe<RecipeFilterInput>;
  unitProductionValue?: InputMaybe<StrFilterLookup>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type SousRecipeInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  productionValue?: InputMaybe<Scalars['Float']['input']>;
  unitProductionValue?: InputMaybe<Scalars['String']['input']>;
};

export type SousRecipeMutation = {
  __typename?: 'SousRecipeMutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: SousRecipeType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: SousRecipeType;
};


export type SousRecipeMutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type SousRecipeMutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type SousRecipeMutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type SousRecipeMutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type SousRecipeMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type SousRecipeMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type SousRecipeMutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type SousRecipeMutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type SousRecipeMutationPartialSaveArgs = {
  data: SousRecipePartialInput;
};


export type SousRecipeMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type SousRecipeMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type SousRecipeMutationSaveArgs = {
  data: SousRecipeInput;
};

export type SousRecipeOrderInput = {
  createdAt?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  productionValue?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  recipe?: InputMaybe<RecipeOrderInput>;
  unitProductionValue?: InputMaybe<Ordering>;
  updatedAt?: InputMaybe<Ordering>;
};

export type SousRecipePartialInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productionValue?: InputMaybe<Scalars['Float']['input']>;
  unitProductionValue?: InputMaybe<Scalars['String']['input']>;
};

export type SousRecipeType = {
  __typename?: 'SousRecipeType';
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  productionValue?: Maybe<Scalars['Float']['output']>;
  recipe: RecipeType;
  unitProductionValue?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SousRecipeTypePageInfo = {
  __typename?: 'SousRecipeTypePageInfo';
  data: Array<SousRecipeType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type StrFilterLookup = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  exact?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iContains?: InputMaybe<Scalars['String']['input']>;
  iEndsWith?: InputMaybe<Scalars['String']['input']>;
  iExact?: InputMaybe<Scalars['String']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['String']['input']>;
  inList?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type SystemType = {
  __typename?: 'SystemType';
  empty: Scalars['Void']['output'];
};

export type UuidFilterLookup = {
  contains?: InputMaybe<Scalars['UUID']['input']>;
  endsWith?: InputMaybe<Scalars['UUID']['input']>;
  exact?: InputMaybe<Scalars['UUID']['input']>;
  gt?: InputMaybe<Scalars['UUID']['input']>;
  gte?: InputMaybe<Scalars['UUID']['input']>;
  iContains?: InputMaybe<Scalars['UUID']['input']>;
  iEndsWith?: InputMaybe<Scalars['UUID']['input']>;
  iExact?: InputMaybe<Scalars['UUID']['input']>;
  iRegex?: InputMaybe<Scalars['String']['input']>;
  iStartsWith?: InputMaybe<Scalars['UUID']['input']>;
  inList?: InputMaybe<Array<Scalars['UUID']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['UUID']['input']>;
  lte?: InputMaybe<Scalars['UUID']['input']>;
  range?: InputMaybe<Array<Scalars['UUID']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['UUID']['input']>;
};

export type UserDefinedConfigMutation = {
  __typename?: 'UserDefinedConfigMutation';
  save?: Maybe<Scalars['JSON']['output']>;
};


export type UserDefinedConfigMutationSaveArgs = {
  key: Scalars['String']['input'];
  mine?: Scalars['Boolean']['input'];
  value: Scalars['JSON']['input'];
};

export type WardFilterInput = {
  AND?: InputMaybe<WardFilterInput>;
  NOT?: InputMaybe<WardFilterInput>;
  OR?: InputMaybe<WardFilterInput>;
  code?: InputMaybe<StrFilterLookup>;
  createdAt?: InputMaybe<DatetimeFilterLookup>;
  description?: InputMaybe<StrFilterLookup>;
  id?: InputMaybe<IdFilterLookup>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StrFilterLookup>;
  ownerDepartmentId?: InputMaybe<IntFilterLookup>;
  ownerGroupId?: InputMaybe<IntFilterLookup>;
  ownerId?: InputMaybe<IntFilterLookup>;
  ownerServiceId?: InputMaybe<IntFilterLookup>;
  ownerSiteId?: InputMaybe<IntFilterLookup>;
  realm?: InputMaybe<StrFilterLookup>;
  room?: InputMaybe<RoomFilterInput>;
  updatedAt?: InputMaybe<DatetimeFilterLookup>;
};

export type WardInput = {
  code: Scalars['String']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type WardOrderInput = {
  code?: InputMaybe<Ordering>;
  createdAt?: InputMaybe<Ordering>;
  description?: InputMaybe<Ordering>;
  id?: InputMaybe<Ordering>;
  isPrivate?: InputMaybe<Ordering>;
  isSystem?: InputMaybe<Ordering>;
  name?: InputMaybe<Ordering>;
  ownerDepartmentId?: InputMaybe<Ordering>;
  ownerGroupId?: InputMaybe<Ordering>;
  ownerId?: InputMaybe<Ordering>;
  ownerServiceId?: InputMaybe<Ordering>;
  ownerSiteId?: InputMaybe<Ordering>;
  realm?: InputMaybe<Ordering>;
  room?: InputMaybe<RoomOrderInput>;
  updatedAt?: InputMaybe<Ordering>;
};

export type WardPartialInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type WardType = {
  __typename?: 'WardType';
  code: Scalars['String']['output'];
  contentTypeLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletionLevel?: Maybe<Scalars['Int']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isClassified: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isPrivate: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerDepartmentId?: Maybe<Scalars['Int']['output']>;
  ownerGroupId?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['Int']['output']>;
  ownerServiceId?: Maybe<Scalars['Int']['output']>;
  ownerSiteId?: Maybe<Scalars['Int']['output']>;
  room?: Maybe<Array<RoomType>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type WardTypeRoomArgs = {
  filters?: InputMaybe<RoomFilterInput>;
  order?: InputMaybe<RoomOrderInput>;
};

export type WardTypeMutation = {
  __typename?: 'WardTypeMutation';
  classify: MutationSuccessType;
  classifyList: MutationSuccessType;
  declassify: MutationSuccessType;
  declassifyList: MutationSuccessType;
  delete: MutationSuccessType;
  deleteList: MutationSuccessType;
  erase: MutationSuccessType;
  eraseList: MutationSuccessType;
  partialSave: WardType;
  restore: MutationSuccessType;
  restoreList: MutationSuccessType;
  save: WardType;
};


export type WardTypeMutationClassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type WardTypeMutationClassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type WardTypeMutationDeclassifyArgs = {
  pk: Scalars['Int']['input'];
};


export type WardTypeMutationDeclassifyListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type WardTypeMutationDeleteArgs = {
  pk: Scalars['Int']['input'];
};


export type WardTypeMutationDeleteListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type WardTypeMutationEraseArgs = {
  pk: Scalars['Int']['input'];
};


export type WardTypeMutationEraseListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type WardTypeMutationPartialSaveArgs = {
  data: WardPartialInput;
};


export type WardTypeMutationRestoreArgs = {
  pk: Scalars['Int']['input'];
};


export type WardTypeMutationRestoreListArgs = {
  pks: Array<Scalars['Int']['input']>;
};


export type WardTypeMutationSaveArgs = {
  data: WardInput;
};

export type WardTypePageInfo = {
  __typename?: 'WardTypePageInfo';
  data: Array<WardType>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasOtherPages?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  pages: Array<Scalars['Int']['output']>;
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};
