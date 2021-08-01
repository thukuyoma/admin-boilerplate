import React, { SyntheticEvent, useState } from 'react'
import { useMutation } from 'react-query'
import { useRouter } from 'next/router'
import AccountsPermission from './permissions/AccountsPermissions'
import PostsPermission from './permissions/PostsPermissions'
import SettingsPermissions from './permissions/SettingsPermissions'
import UtilitiesPermissions from './permissions/UtilitiesPermissions'
import Button from '../buttons/Button'
import ErrorAlert from '../shared/ErrorAlert'
import SuccessAlert from '../shared/SuccessAlert'
import createAdmin from '../../actions/account/create-admin'
import { toast } from 'react-toastify'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import InputSelect from '../forms/InputSelect'

export default function CreateAdmin({ email, user }) {
  const router = useRouter()
  const { mutateAsync, isLoading, isSuccess, isError, error } = useMutation(createAdmin, {
    retry: false,
  })
  const [role, setRole] = useState('')
  const [accounts, setAccounts] = useState({
    canMakeAdmin: false,
    canDeleteAdmin: false,
    canBlockUser: false,
    canBlockAdmin: false,
    canUpdateAdmin: false,
    canGetAdmin: false,
    canLogin: true,
  })

  const [posts, setPosts] = useState({
    canUpdatePost: false,
    canDeletePost: false,
    canHidePost: false,
    canWritePost: false,
    canHideComment: false,
    canCreateCategory: false,
    canUpdateCategory: false,
  })

  const [settings, setSettings] = useState({
    canSetAdvert: false,
    canSetPostAlert: false,
    canSetHero: false,
    canSetSections: false,
    canUpdateSocial: false,
  })

  const [utilities, setUtilities] = useState({
    canViewActions: false,
    canSeeAnalytics: false,
  })
  const handleSetAccounts = (name: string) => {
    setAccounts((prev) => ({ ...prev, [name]: !accounts[name] }))
  }

  const handleSetPosts = (name: string) => {
    setPosts((prev) => ({ ...prev, [name]: !posts[name] }))
  }

  const handleSetSettings = (name: string) => {
    setSettings((prev) => ({ ...prev, [name]: !settings[name] }))
  }

  const handleSetUtilities = (name: string) => {
    setUtilities((prev) => ({ ...prev, [name]: !utilities[name] }))
  }

  const handleCreateAdmin = async (e: SyntheticEvent) => {
    e.preventDefault()
    const formData = {
      userToMakeAdminEmail: email,
      role: role,
      permissions: {
        accounts,
        posts,
        settings,
        utilities,
      },
    }
    await mutateAsync(formData, {
      onSuccess: (data) => {
        toast.success(
          `You have successfully made ${capitalizeFirstLetter(
            user.firstName
          )} ${capitalizeFirstLetter(user.lastName)} an admin`
        )
        router.push(`/admins/${data}`)
      },
    })
  }

  return (
    <>
      <InputSelect
        title="Admin Role"
        label="role"
        name="role"
        value={role}
        isRequired
        options={['super', 'master', 'editor', 'support', 'marketer', 'developer']}
        onChange={(e) => setRole(e.target.value)}
      />
      <AccountsPermission handleSetAccounts={handleSetAccounts} accounts={accounts} />
      <PostsPermission handleSetPosts={handleSetPosts} posts={posts} />
      <SettingsPermissions handleSetSettings={handleSetSettings} settings={settings} />
      <UtilitiesPermissions handleSetUtilities={handleSetUtilities} utilities={utilities} />
      {isSuccess && (
        <SuccessAlert message="Admin successfully created, redirecting to created admin" />
      )}
      {isError && <ErrorAlert error={error} />}
      <Button
        block
        title="Create Admin"
        onClick={handleCreateAdmin}
        loading={isLoading}
        align="center"
        disabled={isLoading || isSuccess}
        color="primary"
        size="medium"
        variant="filled"
      />
    </>
  )
}
