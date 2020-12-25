import {
    AboutInfo,
    APIAlias,
    APIMember,
    APIUserStatus,
    MembershipRole,
    SocialLink,
} from '@guildedjs/guilded-api-typings';
 
import Base from './Base';
import type Client from './Client';
import TeamMemberRoleManager from './managers/TeamMemberRoleManager';
import type Team from './Team';
 
/**
 * A member of a team
 */
export default class Member extends Base<APIMember> {
    /**
     * The current username of this member
     */
    public name!: string;

    /**
     * The current nickname of this member in this team
     */
    public nickname!: string | null;

    /**
     * Badges belonging to this member
     */
    public badges!: string[] | null;

    /**
     * The date in which this member joined
     */
    public joinDate!: Date;

    /**
     * Unknown purpose
     */
    public membershipRole!: MembershipRole;

    /**
     * The last date in which this member was detected to be online
     */
    public lastOnline!: Date | null;

    /**
     * The profile picture belonging to this member
     */
    public profilePicture!: string | null;

    /**
     * The blurred out banner belonging to this member
     */
    public profileBannerBlur!: string | null;

    /**
     * Additional info regarding this member
     */
    public aboutInfo!: AboutInfo | null;
    
    /**
     * This members current detected status
     */
    public userStatus!: APIUserStatus;

    /**
     * Connections that this member has to other social media platforms
     */
    public socialLinks!: SocialLink[] | null;

    /**
     * The IDs of the roles that this member has
     */
    public roleIds!: number[] | null;

    /**
     * Unknown purpose
     */
    public subscriptionType!: string | null;

    /**
     * Aliases this member may have on games
     */
    public aliases!: APIAlias[];

    /**
     * Unknown purpose
     */
    public userPresenceStatus!: number;

    /**
     * The amount of XP this member has in this team
     */
    public teamXp!: number;

    /**
     * The manager in charge of managing the roles this member has
     */
    public roles: TeamMemberRoleManager;
    constructor(client: Client, data: APIMember, public team: Team) {
        super(client, data, false);
        this.roles = new TeamMemberRoleManager(client, this);
    }
 
    /**
     * Update the data in this structure
     * @internal
     */
    patch(data: APIMember | Partial<APIMember>): this {
        if ('name' in data && data.name !== undefined) this.name = data.name;
        if ('nickname' in data && data.nickname !== undefined) this.nickname = data.nickname;
        if ('badges' in data && data.badges !== undefined) this.badges = data.badges;
        if ('joinDate' in data && data.joinDate !== undefined) this.joinDate = new Date(data.joinDate);
        if ('membershipRole' in data && data.membershipRole !== undefined) this.membershipRole = data.membershipRole;
        if ('lastOnline' in data && data.lastOnline !== undefined)
            this.lastOnline = data.lastOnline ? new Date(data.lastOnline) : null;
        if ('profilePicture' in data && data.profilePicture !== undefined) this.profilePicture = data.profilePicture;
        if ('profileBannerBlur' in data && data.profileBannerBlur !== undefined)
            this.profileBannerBlur = data.profileBannerBlur;
        if ('aboutInfo' in data && data.aboutInfo !== undefined) this.aboutInfo = data.aboutInfo;
        if ('userStatus' in data && data.userStatus !== undefined) this.userStatus = data.userStatus;
        if ('socialLinks' in data && data.socialLinks !== undefined) this.socialLinks = data.socialLinks;
        if ('roleIds' in data && data.roleIds !== undefined) this.roleIds = data.roleIds;
        if ('subscriptionType' in data && data.subscriptionType !== undefined)
            this.subscriptionType = data.subscriptionType;
        if ('aliases' in data && data.aliases !== undefined) this.aliases = data.aliases;
        if ('userPresenceStatus' in data && data.userPresenceStatus !== undefined)
            this.userPresenceStatus = Number(data.userPresenceStatus);
        if ('teamXp' in data && data.teamXp !== undefined) this.teamXp = data.teamXp;
 
        return this;
    }
}
